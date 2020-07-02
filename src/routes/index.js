import React from "react";
import { Route } from "react-router-dom";

import Home from "../views/Home";
import Login from "../views/Login";
import NotFound from "../views/404";

export default [
  <Route exact key="home" path="/" component={Home} />,
  <Route exact key="login" path="/login" component={Login} />,
  <Route key="404" path="*" component={NotFound} />,
];
