import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Switch,
} from "react-router-dom";
import BodyLayout from "../layout/BodyLayout";

import Build from "../pages/Build";

const Routes = () => {
  return (
    <BrowserRouter>
      <BodyLayout>
        <Switch>
          <Route exact path="/" element={<Navigate to="/build" />} />
          <Route exact path="/build" element={<Build />} />
          <Route exact path="/not_found" element={<h1>Not Found</h1>} />
          <Route path="*" element={<Navigate to="/not_found" />} />
        </Switch>
      </BodyLayout>
    </BrowserRouter>
  );
};

export default Routes;
