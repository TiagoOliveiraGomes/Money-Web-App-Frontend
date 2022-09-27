import React from 'react'
import { Router, Route, Redirect, hashHistory} from 'react-router'

import { BillingCycle } from '../components/billingCycle'
import { Dashboard } from '../components/dashboard'

export function Routes() {
  return (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
  )
}
