import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./pages/Landing";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default Routes;
