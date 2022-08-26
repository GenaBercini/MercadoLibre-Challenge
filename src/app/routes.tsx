import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import DetailsScreen from "../app/screens/Details/Details";

import HomeScreen from "./screens/Home/Home";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact component={HomeScreen} path="/" />
      <Route component={DetailsScreen} path="/details" />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
