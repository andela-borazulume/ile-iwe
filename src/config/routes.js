import React from "react";
import { Router, Route, IndexRedirect, hashHistory } from "react-router";
import Login from "../components/Login";
import Main from "../components/Main";
import NoMatch from "../components/NoMatch";
import App from "../components/App"

export default routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRedirect to="/"/>
      <Route path="/home" component={App}/>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Login} />
      <Route path="*" component={NoMatch}></Route>
    </Route>
  </Router>
)
