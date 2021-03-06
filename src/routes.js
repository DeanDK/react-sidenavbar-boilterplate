import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/home.js";
import Layout from "./components/hoc/Layout/layout.js";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
