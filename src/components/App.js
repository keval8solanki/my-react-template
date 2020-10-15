import React from "react";
import styled from "styled-components";

import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home";

export default function App() {
  return (
    <AppContainer>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </HashRouter>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;
