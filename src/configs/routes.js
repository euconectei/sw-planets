import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {
  Home,
  Planet,
  Planets,
} from '../pages';
import { Loading } from '../components';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/planets',
    component: Planets,
  },
  {
    path: '/planets/:id',
    component: Planet
    // component: lazy(Planet)
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