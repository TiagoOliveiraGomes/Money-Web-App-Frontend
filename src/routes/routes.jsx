import React from 'react'
import { Router, Route, Redirect, hashHistory, IndexRoute} from 'react-router'

import App from '../app'
import BillingCycle from '../components/billingCycle'
import  Dashboard  from '../components/dashboard'
import  Dashboard2  from '../components/dashboard2'

export default props => (
  <Router history={hashHistory}>
      <Route path='/' component={App}>
          <IndexRoute component={Dashboard2} />
          <Route path='billingCycles' component={BillingCycle} />
      </Route>
      <Redirect from='*' to='/' />
  </Router>
)
