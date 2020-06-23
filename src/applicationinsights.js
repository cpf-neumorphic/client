import React from "react";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import {
  ReactPlugin,
  withAITracking
} from "@microsoft/applicationinsights-react-js";
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory({ basename: "" });
var reactPlugin = new ReactPlugin();
var appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: "Y3a827613-7d2c-4f5a-b38e-63b3f4ca54e3",
    extensions: [reactPlugin],
    extensionConfig: {
      [reactPlugin.identifier]: { history: browserHistory }
    }
  }
});
appInsights.loadAppInsights();
appInsights.trackPageView();
// To instrument various React components usage tracking, apply the `withAITracking` higher-order
// component function.

class MyComponent extends React.Component {}

export default withAITracking(reactPlugin, appInsights);
