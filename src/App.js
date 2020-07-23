import React from 'react';
import Home from './views/Home';
import Details from './views/Details';
import StateDetail from './views/StateDetail';
import NotFound from './views/NotFound';
import Navigator from './components/Navigator';
import styled, { createGlobalStyle } from "styled-components";
import { Reset } from 'styled-reset';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }
`;

const RouterWrapper = styled.div`
  padding-top: 60px;

  @media (min-width: 768px) {
    padding-top: 80px;
  }
`;

function App() {
  return (
    <div>
      <Navigator />
      <RouterWrapper>
        <Router>
          <Switch>
            <Route exact path="/detalhes/:id">
              <Details />
            </Route>
            <Route exact path="/estados/:estado">
              <StateDetail />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </RouterWrapper>
      <Reset />
      <GlobalStyle />
    </div>
  );
}

export default App;
