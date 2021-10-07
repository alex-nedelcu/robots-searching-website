/* the imports must be at the top */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tachyons";
import App from "./containers/App.js";

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
);
