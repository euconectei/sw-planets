import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {
  HomePage,
  PlanetPage,
} from '../pages';
import { Loading } from '../components';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/planets/:id',
    component: PlanetPage
  },
];

const RouteConfig = () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Switch>
        {
          routes.map((route, i) =>
            <Route
              exact
              key={i}
              path={route.path}
              render={
                props => <route.component {...props} />
              }
            />
          )
        }
      </Switch>
    </Suspense>
  </Router>
);

export default RouteConfig;