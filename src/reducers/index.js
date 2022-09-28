import { combineReducers } from 'redux'
import { DashboardReducer } from '../components/dashboard/reducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer
})

export default rootReducer