import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavPage from './pages/nav/Nav';

import { ROUTE_PATHS } from './settings';

const Routes = () => (
  <Switch>
    <Route exact path={ROUTE_PATHS.nav}>
      <NavPage />
    </Route>
  </Switch>
);

export default Routes;
