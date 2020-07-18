import React from "react";
import { Route } from "react-router-dom";
import { getAllPageInfor } from "../asset/pages";

import Home from "../views/Home";
import Login from "../views/Login";
import DemoPage from "../views/DemoPage";
import NotFound from "../views/404";

const demoPageRoutes = getAllPageInfor().map((page) => (
  <Route
    exact
    key={page.pageSlug}
    path={page.pageSlug}
    component={() => <DemoPage title={page.pageTitle} />}
  />
));

const demoCategoryRoutes = getAllPageInfor().map((page) => (
  <Route
    exact
    key={page.pageSlug}
    path={page.pageSlug}
    component={() => <DemoPage title={page.pageTitle} />}
  />
));

export default [
  <Route exact key="home" path="/" component={Home} />,
  <Route exact key="login" path="/login" component={Login} />,
  demoPageRoutes,
  <Route key="404" path="*" component={NotFound} />,
];
