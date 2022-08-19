"use strict";(self.webpackChunk_buidlerlabs_hedera_strato_docs=self.webpackChunk_buidlerlabs_hedera_strato_docs||[]).push([[918],{11406:(e,n,r)=>{r.d(n,{Z:()=>P});var t=r(87462),o=r(63366),a=r(67294),l=r(52263);const s={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundRunButton:"playgroundRunButton_UDa7",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I",playgroundLogsContainer:"playgroundLogsContainer_J_8s",playgroundLogItem:"playgroundLogItem_hcYf",internal:"internal_wyy_",logHint:"logHint_hGWO",userInput:"userInput_ycdV",info:"info_Drtk",debug:"debug_jruY",warn:"warn_ykIF",error:"error_cnln"};var i=r(74165),g=r(15861),u=r(10407),c=r(95999),d=r(86010),m=r(72389);function p(e){var n=e.onChange,r=e.disabled,t=(0,m.Z)();return a.createElement(u.uz,{key:t,className:s.playgroundEditor,onChange:n,disabled:r})}function v(e){var n=e.children;return a.createElement("div",{className:(0,d.Z)(s.playgroundHeader)},n)}const f=function(e){var n=e.isRunning,r=e.onRunAction,t=e.onChange,o=e.disabled;return a.createElement(a.Fragment,null,a.createElement(v,null,a.createElement(c.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),a.createElement(p,{onChange:t,disabled:n}),a.createElement(v,null,a.createElement("button",{className:s.playgroundRunButton,onClick:r,disabled:o||n},"RUN")))};var y=r(91262),_=r(97762);function L(){return a.createElement("div",null,"Loading...")}var E=function(e){var n=e.isRunning,r=a.useContext(u.L2),t=a.useState(),o=t[0],l=t[1],i=r.element;return a.useEffect((function(){var e=i?(0,_.renderToString)(a.createElement(i,null)):null;e&&l(e)}),[r]),n?i?a.createElement("div",{className:s.playgroundPreview},a.createElement(i,null)):null:o?a.createElement("div",{className:s.playgroundPreview},a.createElement("div",{dangerouslySetInnerHTML:{__html:o}})):null},h=function(e){var n=e.error,r=e.errorCallback,t=a.useContext(u.L2);return a.useEffect((function(){t.error&&r(t.error)}),[t]),n?a.createElement("pre",{style:{color:"red"}},n):null};const b=function(e){var n=e.isRunning,r=e.error,t=e.errorCallback;return a.createElement("div",null,a.createElement(y.Z,{fallback:a.createElement(L,null)},(function(){return a.createElement(a.Fragment,null,a.createElement(E,{isRunning:n}),a.createElement(h,{error:r,errorCallback:t}))})))};var C=["hasTopPosition"];const S=function(e){var n=e.hasTopPosition,r=(0,o.Z)(e,C),l=[{Component:f,name:"editor",props:r},{Component:b,name:"result",props:r}];return(n?l.reverse():l).map((function(e){var n=e.Component,r=e.props,o=e.name;return a.createElement(n,(0,t.Z)({key:o+"-container"},r))}))};const w=function(){function e(){this._events={}}var n=e.prototype;return n.on=function(e,n){this._events[e]||(this._events[e]=[]),this._events[e].push(n)},n.removeListener=function(e){this._events[e]=null},n.emit=function(e,n){if(!this._events[e])throw new Error("Can't emit an event. Event \""+e+"\" doesn't exits.");this._events[e].forEach((function(e){e(n)}))},e}(),N="loadingSpinner_m9qL";const k=function(){return a.createElement("div",{className:N},a.createElement("div",null),a.createElement("div",null),a.createElement("div",null))};var Z=r(66412),H=["children","playgroundPosition"],R=new w;const x=function(e){var n=e.children,r=e.playgroundPosition,l=(0,o.Z)(e,H),c=a.useState(!0),m=c[0],p=c[1],v=a.useState(n),f=v[0],y=v[1],_=a.useState(!1),L=_[0],E=_[1],h=a.useState(null),b=h[0],C=h[1],w=a.useRef(!1),N=(0,Z.p)(),x={Loader:k,liveEventEmitter:R},I=function(e){e===l.containerKey&&C(null),E(e===l.containerKey),p(e!==l.containerKey)},P=function(){E(!1),p(!1)},T=function(e){C(e),R.emit("done")},A=function(e){var n=e.error;e.emitterKey===l.containerKey&&(E(!1),T(n.toString()))};return a.useEffect((function(){w.current=!0;var e=function e(n,r){window[n]?r():setTimeout((function(){e(n,r)}),500)},n=function(){var n=(0,g.Z)((0,i.Z)().mark((function n(){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e("ApiSession",(function(){w.current&&(R.on("running",I),R.on("done",P),R.on("executionError",A),p(!1))}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return n(),function(){w.current=!1,R.removeListener("running",I),R.removeListener("done",P),R.removeListener("executionError",A)}}),[l.categoryKey]),a.createElement(a.Fragment,null,a.createElement(u.nu,{code:f.replace(/\n$/,""),scope:x,transformCode:function(e){return L?function(e,n){return"  \n        const originalApiSession = ApiSession.default;\n        const originalLogger = console.log;\n        \n        const argToLogResult = (_arg) => {\n            try{\n                if(_arg.logLevel){\n                    return {\n                        logLevel: _arg.logLevel,\n                        message: _arg.message\n                    }\n                }else{\n                    let _parsed = _arg.toString();\n                    \n                    if(_arg._isBigNumber){\n                        _parsed = <span>\n                            {_parsed}\n                            <span className={ `"+(0,d.Z)(s.playgroundLogItem,s.internal,s.logHint)+"` }>(BigNumber)</span>\n                        </span>;    \n                    }\n                    \n                    return _parsed\n                }\n            }catch (e) {\n              console.error(e)\n            }\n        }\n        \n        const argToStringMapping = _arg => {\n            if(!_arg){\n                 return null;   \n            }\n            \n            if(typeof _arg === 'string'){\n                return _arg;\n            } else{\n                return argToLogResult(_arg);\n            }\n        }\n        \n        const addEventListeners = (_logger) => {\n            _logger.addListener('debug', (message) => logListenerHandler('debug', message))\n            _logger.addListener('error', (message) => logListenerHandler('error', message))\n            _logger.addListener('info', (message) => logListenerHandler('info', message))\n            _logger.addListener('warn', (message) => logListenerHandler('warn', message))\n        }\n        \n        const removeEventListeners = (_logger) => {\n            _logger.removeListener('debug', logListenerHandler);\n            _logger.removeListener('error', logListenerHandler);\n            _logger.removeListener('info', logListenerHandler);\n            _logger.removeListener('warn', logListenerHandler);\n        }\n        \n        const logListenerHandler = (logLevel, message) => console.log({logLevel, message}); \n        \n        ApiSession = {\n            ...ApiSession,\n            default: (...args) => {\n                return originalApiSession(...args).then(({session, controller}) => {\n                    if(!window.originalStratoSession) {\n                        window.originalStratoSession = session;\n                        addEventListeners(session.log);\n                    }\n                    \n                    return {session, controller};\n                })\n            }\n        }\n    \n        let logs = [];\n        console.log = (...args) => {\n            if(Array.isArray(args)) {\n                args = args\n                .map(argToStringMapping)\n                .filter(Boolean)\n        \n                logs = [...logs, ...args]\n            }else{\n                if(!args) return;\n                const log = argToLogResult(args);\n\n                logs = [...logs, log]\n            }\n            \n            const LogLevelBadge = ({text}) => {\n                const _styles = "+JSON.stringify(s)+";\n                const logClassName = _styles.playgroundLogItem;\n                const logBadgeClassName = _styles[text];\n                \n                return <span className={logClassName + ' ' + logBadgeClassName}>{text}</span>\n            }\n            \n            render(<div className={'"+s.playgroundLogsContainer+"'}>\n                {logs.map((log, index) => {\n                    { \n                        return log.logLevel \n                            ? <p key={index} className={ `"+(0,d.Z)(s.playgroundLogItem,s.internal)+"` }>\n                                    <LogLevelBadge text={log.logLevel}/> - {log.message}\n                              </p>\n                            : <p key={index} className={ `"+(0,d.Z)(s.playgroundLogItem,s.userInput)+"` }>{log}</p>\n                    }\n                })}\n            </div>) \n        };\n \n        (async function () {\n            render(<Loader/>); \n            \n            try{\n                 "+e+"\n            }catch (error) {\n                console.log(null) //in case of error, clear the current logs result\n                console.error(error); // also display the error on the console for easy debugging\n                \n                liveEventEmitter.emit('executionError', {\n                    error: error,\n                    emitterKey: '"+n+"' \n                });\n            }\n            \n            if(window.originalStratoSession) {\n                removeEventListeners(originalStratoSession.log);\n                originalStratoSession = null;\n            }\n            \n            console.log = originalLogger;\n            liveEventEmitter.emit('done');\n        })();\n    "}(e,l.containerKey):"render(null)"},theme:N,noInline:!0,disabled:m},a.createElement(S,(0,t.Z)({hasTopPosition:"top"===r,isRunning:L,onRunAction:function(){return R.emit("running",l.containerKey)},onChange:y,disabled:m,error:b,errorCallback:T},l))))};var I=["children"];function P(e){var n=e.children,r=(0,o.Z)(e,I),i=(0,l.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,g=r.metastring.split(" ").reduce((function(e,n){var r=n.split("="),t=r[0],o=r[1];return e[t]=o,e}),{});return a.createElement("div",{className:s.playgroundContainer},a.createElement(x,(0,t.Z)({playgroundPosition:i},g),n))}},56922:(e,n,r)=>{r.d(n,{Z:()=>o});var t=r(67294);const o=Object.assign({React:t},t)}}]);