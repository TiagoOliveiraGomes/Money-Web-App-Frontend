import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import { DashboardReducer } from '../components/dashboard/reducer'
import { TabReducer } from '../common/tab/tabReducer'
import { billingCycleReducer } from '../components/billingCycle/reducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: billingCycleReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer