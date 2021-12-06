import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Loading } from 'antd-mobile'
import { basicRoutes } from '@/routes'

function App() {
  return (
    <Suspense fallback={<Loading color='primary' />}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        {
          basicRoutes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))
        }
      </Switch>
    </Suspense>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}


export default App
