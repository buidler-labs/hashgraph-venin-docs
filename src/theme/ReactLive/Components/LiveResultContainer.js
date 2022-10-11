import * as React from "react";
import { LiveContext } from "react-live";
import { renderToString } from "react-dom/server";
import BrowserOnly from "@docusaurus/core/lib/client/exports/BrowserOnly";

import styles from "../../Playground/styles.module.css";

function LivePreviewLoader() {
  return <div>Loading...</div>;
}

const LiveResultContainer = ({ isRunning, error, errorCallback }) => {
  return (
    <div>
      <BrowserOnly fallback={<LivePreviewLoader />}>
        {() => (
          <>
            <LogsResult isRunning={isRunning} />
            <ErrorResult error={error} errorCallback={errorCallback} />
          </>
        )}
      </BrowserOnly>
    </div>
  );
};

const LogsResult = ({ isRunning }) => {
  const { element: Element } = React.useContext(LiveContext);
  const [logs, setLogs] = React.useState();

  React.useEffect(() => {
    const logsHTML = Element ? renderToString(<Element />) : null;

    if (logsHTML) {
      setLogs(logsHTML);
    }
  }, [Element]);

  const LiveLogsContainer = Element ? (
    <div className={styles.playgroundPreview}>
      <Element />
    </div>
  ) : null;
  const LogsResultContainer = logs ? (
    <div className={styles.playgroundPreview}>
      <div dangerouslySetInnerHTML={{ __html: logs }} />
    </div>
  ) : null;

  return isRunning ? LiveLogsContainer : LogsResultContainer;
};

const ErrorResult = ({ error, errorCallback }) => {
  const { error: ctxError } = React.useContext(LiveContext);

  React.useEffect(() => {
    if (ctxError) {
      errorCallback(ctxError);
    }
  }, [ctxError]);

  return error ? <pre style={{ color: "red" }}>{error}</pre> : null;
};

export default LiveResultContainer;
