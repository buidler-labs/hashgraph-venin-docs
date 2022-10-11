import * as React from "react";
import { LiveEditor, LiveContext } from "react-live";
import Translate from "@docusaurus/core/lib/client/exports/Translate";
import clsx from "clsx";
import styles from "../../Playground/styles.module.css";

const LiveEditorContainer = ({ isRunning, onRunAction, onChange }) => {
  const { disabled } = React.useContext(LiveContext);

  return (
    <>
      <Header>
        <Translate
          id="theme.Playground.liveEditor"
          description="The live editor label of the live codeblocks"
        >
          Live Editor
        </Translate>
      </Header>
      <LiveEditor
        className={styles.playgroundEditor}
        disabled={disabled || isRunning}
        onChange={onChange}
      />
      <Header>
        <button
          className={styles.playgroundRunButton}
          onClick={onRunAction}
          disabled={disabled || isRunning}
        >
          RUN
        </button>
      </Header>
    </>
  );
};

function Header({ children }) {
  return <div className={clsx(styles.playgroundHeader)}>{children}</div>;
}

export default LiveEditorContainer;
