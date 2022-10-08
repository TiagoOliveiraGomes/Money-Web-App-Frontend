import { api } from "../../../service/api"
import { toastr } from 'react-redux-toastr'
import { reset as resetForm} from 'redux-form'
import { showTabs, selectTab } from "../../../common/tab/tabActions"

export function getList() {
    
    const request = api.get(`/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return dispatch => {
        api.post('/billingCycles', values)
        .then(resp => {
            toastr.success('Sucesso', "Operação realizada com sucesso")
            dispatch([
                resetForm('billingCycleForm'),
                getList(),
                selectTab('tabList'),
                showTabs('tabList', 'tabCreate')
            ])
        })
        .catch( error => {
            error.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    }
}