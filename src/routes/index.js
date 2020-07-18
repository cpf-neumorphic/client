import React from "react";
import { Route } from "react-router-dom";
import { getAllPageInfor, getAllCategoryInfor } from "../asset/pages";

import Home from "../views/Home";
import Login from "../views/Login";
import DemoPage from "../views/DemoPage";
import DemoCategory from "../views/DemoCategory";
import NotFound from "../views/404";

const demoPageRoutes = getAllPageInfor().map((page) => (
  <Route
    exact
    key={page.pageSlug}
    path={page.pageSlug}
    component={() => <DemoPage title={page.pageTitle} />}
  />
));

const demoCategoryRoutes = getAllCategoryInfor().map((category) => (
  <Route
    exact
    key={category.categorySlug}
    path={category.categorySlug}
    component={() => (
      <DemoCategory
        title={category.categoryTitle}
        description={category.categoryDescription}
      />
    )}
  />
));

export default [
  <Route exact key="home" path="/" component={Home} />,
  <Route exact key="login" path="/login" component={Login} />,
  demoPageRoutes,
  demoCategoryRoutes,
  <Route key="404" path="*" component={NotFound} />,
];
