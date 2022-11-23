import * as React from "react";
import { usePrismTheme } from "@docusaurus/theme-common";
import { LiveProvider } from "react-live";

import LiveEventEmitter from "../ReactLive/LiveEventEmitter";
import LoadingSpinner from "./Components/LoadingSpinner";
import { VeninContext } from "../Root";
import LiveEditorContainer from "./Components/LiveEditorContainer";
import LiveResultContainer from "./Components/LiveResultContainer";
import { VeninLiveLogger } from "./VeninLiveLogger";

const wrapAsync = (code, UeID) => {
  const transformedCode = `
    const oApiSession = ApiSession.default;

    ApiSession = {
      ...ApiSession,
      default: (...args) => {
        return oApiSession(...args).then(({session, controller}) => {
          logger.bindTo(session, render);
          
          return {session, controller};
        })
      }
    }

    render(<Loader/>);

    (async function () {
      try {
        let log = logger.log.bind(logger);

        ${code}
      } catch (error) {
        console.error(error);
        
        events.emit('executionError', {
          error: error,
          eId: ${UeID} 
        });
      }
      
      logger.release(render);
      events.emit('done');
    })();`;
  return transformedCode;
};

const events = new LiveEventEmitter();

const ReactLive = ({ children }) => {
  const [disabled, setDisabled] = React.useState(true);
  const [running, setRunning] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [code, setCode] = React.useState(children);
  const [UeID] = React.useState(Math.random()); // Unique Editor Id
  const { Venin } = React.useContext(VeninContext);
  const prismTheme = usePrismTheme();
  const [logger] = React.useState(new VeninLiveLogger());
  const scope = {
    ...Venin,
    Loader: LoadingSpinner,
    events,
    logger,
  };

  const onRunHandler = (emittedUeId) => {
    if (emittedUeId === UeID) {
      setError(null);
    }

    setRunning(emittedUeId === UeID);
    setDisabled(emittedUeId !== UeID);
  };

  const onDoneHandler = () => {
    setRunning(false);
    setDisabled(false);
  };

  const onErrorHandler = (error) => {
    setError(error);
    events.emit(`done`);
  };

  const executionErrorHandler = ({ error, eId }) => {
    if (eId === UeID) {
      setRunning(false);
      onErrorHandler(error.toString());
    }
  };

  React.useEffect(() => {
    if (Venin && Venin.ApiSession) {
      events.on("running", onRunHandler);
      events.on("done", onDoneHandler);
      events.on("executionError", executionErrorHandler);

      setDisabled(false);
    }

    return () => {
      events.removeListener("running", onRunHandler);
      events.removeListener("done", onDoneHandler);
      events.removeListener("executionError", executionErrorHandler);
    };
  }, [Venin]);

  return (
    <LiveProvider
      code={code.replace(/\n$/, "")}
      scope={scope}
      transformCode={(_code) =>
        running ? wrapAsync(_code, UeID) : "render(null)"
      }
      theme={prismTheme}
      noInline={true}
      disabled={disabled}
    >
      <LiveEditorContainer
        isRunning={running}
        onRunAction={() => events.emit("running", UeID)}
        onChange={setCode}
      />
      <LiveResultContainer
        isRunning={running}
        error={error}
        errorCallback={onErrorHandler}
      />
    </LiveProvider>
  );
};

export default ReactLive;
