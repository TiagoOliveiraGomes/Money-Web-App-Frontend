import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

<<<<<<< Updated upstream:src/reducers/index.js
import  DashboardReducer from '../components/dashboard/reducer'
import  TabReducer from '../common/tab/tabReducer'
import  BillingCycleReducer  from '../components/billingCycle/reducer'
=======
import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/reducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
>>>>>>> Stashed changes:src/main/reducers.js

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer