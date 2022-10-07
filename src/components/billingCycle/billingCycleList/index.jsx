import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getList } from '../actions'

class BillingCycleList extends Component {

    componentWillMount(){
        this.props.getList()
    }
    render() {
      console.log("Props list: ", this.props.list)
    return (
      <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Mês</th>
                    <th>Ano</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({list: state.billingCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
const BillingCycleListConnect = connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)
export {BillingCycleListConnect}