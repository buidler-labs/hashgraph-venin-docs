import * as React from "react";
import styles from "../Playground/styles.module.css";
import LoadingSpinner from "./Components/LoadingSpinner";

export class StratoLiveLogger {
  constructor() {
    this._sSession = null;
    this._logs = [];
  }

  bindTo(session, render) {
    const stratoLogger = session.log;
    const argToLogResult = (_arg) => {
      try {
        if (_arg.logLevel) {
          return {
            logLevel: _arg.logLevel,
            message: _arg.message,
          };
        } else {
          let _parsed = _arg.toString();

          if (_arg._isBigNumber) {
            _parsed = (
              <span>
                {_parsed}
                <span
                  className={[
                    styles.playgroundLogItem,
                    styles.internal,
                    styles.logHint,
                  ].join(" ")}
                >
                  (BigNumber)
                </span>
              </span>
            );
          }

          return _parsed;
        }
      } catch (e) {
        console.error(e);
      }
    };

    this._handleLog = (message, logLevel) => {
      const log = argToLogResult(logLevel ? { logLevel, message } : message);

      this._logs.push(log);
      this.doA(render);
    };

    stratoLogger.addListener("debug", (message) =>
      this._handleLog(message, "debug")
    );
    stratoLogger.addListener("error", (message) =>
      this._handleLog(message, "error")
    );
    stratoLogger.addListener("info", (message) =>
      this._handleLog(message, "info")
    );
    stratoLogger.addListener("warn", (message) =>
      this._handleLog(message, "warn")
    );
    this._sSession = session;
  }

  log(what) {
    if (!this._handleLog) return;

    this._handleLog(what);
  }

  release(render) {
    if (!this._sSession) return;

    const stratoLogger = this._sSession.log;

    stratoLogger.removeListener("debug", this._handleLog);
    stratoLogger.removeListener("error", this._handleLog);
    stratoLogger.removeListener("info", this._handleLog);
    stratoLogger.removeListener("warn", this._handleLog);
    this._sSession = null;
    this.doA(render);
    this._logs = [];
  }

  doA(render) {
    const LogLevelBadge = ({ text }) => {
      const logClassName = styles.playgroundLogItem;
      const logBadgeClassName = styles[text];

      return (
        <span className={logClassName + " " + logBadgeClassName}>{text}</span>
      );
    };

    render(
      <>
        <div className={styles.playgroundLogsContainer}>
          {this._logs.map((log, index) => {
            {
              return log.logLevel ? (
                <p
                  key={index}
                  className={[styles.playgroundLogItem, styles.internal].join(
                    " "
                  )}
                >
                  <LogLevelBadge text={log.logLevel} /> - {log.message}
                </p>
              ) : (
                <p
                  key={index}
                  className={[styles.playgroundLogItem, styles.userInput].join(
                    " "
                  )}
                >
                  {log}
                </p>
              );
            }
          })}
        </div>
        {this._sSession !== null && <LoadingSpinner />}
      </>
    );
  }
}
