import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Form" component={Form} />
      </Switch>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
