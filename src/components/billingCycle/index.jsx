import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Content } from '../../common/template/content'
import { ContentHeader } from '../../common/template/contentHeader'
import { Tabs } from '../../common/tab'
import { TabHeaderList } from '../../common/tab/tabHeaderList'
import { TabContentList } from '../../common/tab/tabContentList'
import { TabHeaderConnect as TabHeaderItem } from '../../common/tab/tabHeader'
import { TabContentConnect as TabContent } from '../../common/tab/tabContent'
import { BillingCycleListConnect as BillingCycleList } from './billingCycleList'
import { BillingCycleForm as Form } from './billingCycleForm'
import { selectTab, showTabs } from '../../common/tab/tabActions'
import { create } from './actions'

class BillingCycle extends Component {

  componentWillMount (){
    this.props.selectTab('tabList')
    this.props.showTabs('tabList', 'tabCreate')
  }
  render() {
    return (
      <div>
        <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
        <Content>
          <Tabs>
            <TabHeaderList>
              <TabHeaderItem label='Listar' icon='bars' target='tabList' />
              <TabHeaderItem label='Incluir' icon='plus' target='tabCreate' />
              <TabHeaderItem label='Alterar' icon='pencil' target='tabUpdate' />
              <TabHeaderItem label='Excluir' icon='trash-o' target='tabDelete' />
            </TabHeaderList>
            <TabContentList>

              <TabContent id='tabList'>
                <BillingCycleList />
              </TabContent>
              <TabContent id='tabCreate'>
                <Form onSubmit={this.props.create} />
              </TabContent>
              <TabContent id='tabUpdate'>
                <h1>Alterar</h1>
              </TabContent>
              <TabContent id='tabDelete'>
                <h1>Excluir</h1>
              </TabContent>

            </TabContentList>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create}, dispatch)
// export default connect(null, mapDispatchToProps)(BillingCycle)
const BillingCycleConnect = connect(null, mapDispatchToProps)(BillingCycle)
export default BillingCycleConnect
// export {BillingCycleConnect}