import React from 'react'
import { Router, Route, Redirect, hashHistory} from 'react-router'

import { BillingCycle } from '../components/billingCycle'
import  Dashboard  from '../components/dashboard'
import  Dashboard2  from '../components/dashboard2'

export function Routes() {
  return (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard2} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
  )
}
