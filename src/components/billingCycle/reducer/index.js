const INITIAL_STATE ={list: []}

export function billingCycleReducer(state = INITIAL_STATE, action) {
    switch(action.type){
        case "BILLING_CYCLEs_FETCHED":
            return { ...state, list: action.payload.data}
        default:
            return state
    }
}