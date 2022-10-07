import { combineReducers } from 'redux'
import { DashboardReducer } from '../components/dashboard/reducer'
import { TabReducer } from '../common/tab/tabReducer'
import { billingCycleReducer } from '../components/billingCycle/reducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: billingCycleReducer
})

export default rootReducer