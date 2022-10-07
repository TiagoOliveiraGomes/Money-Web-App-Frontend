import Axios from "axios"
import { api } from "../../../service/api"




export function getList() {
    
    const request = api.get(`/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}