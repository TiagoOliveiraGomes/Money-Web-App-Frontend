import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class Form extends Component {
  render() {
    const { handleSubmit} = this.props
    console.log(handleSubmit)
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
            <Field name='name' component='input' />
            <Field name='month' component='input' />
            <Field name='year' component='input' />
        </div>
        <div className='box-footer'>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    )
  }
}

const BillingCycleForm = reduxForm({form: 'billingCycleForm'})(Form)
export {BillingCycleForm}