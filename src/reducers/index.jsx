import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    dashboard: ()=>({summary: {credit:100, debt:50}})
})