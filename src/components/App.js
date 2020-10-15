import { hot } from 'react-hot-loader/root'
import React from "react";
import styled from "styled-components";

import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home";

const App = () => {
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

export default hot(App)

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;
