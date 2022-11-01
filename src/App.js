import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FullMap } from './containers/FullMap';
import * as ROUTES from './constant/routes';
import { HomePage } from './pages/index';
import { HanQuoc } from './pages/index';
import { Aumy } from './pages/index';

export default function App() {
  return (
    <Router>
      <Route exact path="/HomePage">
        <HomePage />
      </Route>
      <Route exact path="/Hàn-Quốc">
        <HanQuoc />
      </Route>
      <Route exact path="/Âu-Mỹ">
        <Aumy />
      </Route>
      <Route exact path={ROUTES.Home}>
        <FullMap />
      </Route>
    </Router>
  );
}
