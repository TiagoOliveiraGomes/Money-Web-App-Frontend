import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import LabelAndInput from '../../form/LabelAndInput'

class Form extends Component {
  render() {
    const { handleSubmit} = this.props
    console.log(LabelAndInput)
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
            <Field name='name' component={LabelAndInput} label='ada' />
            <Field name='month' component={LabelAndInput} label='ada' />
            <Field name='year' component={LabelAndInput} label='ada' />
        </div>
        <div className='box-footer'>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({form: 'billingCycleForm'})(Form)
