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
import { selectTab, showTabs } from '../../common/tab/tabActions'

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
                <h1>Lista</h1>
              </TabContent>
              <TabContent id='tabCreate'>
                <h1>Incluir</h1>
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

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs}, dispatch)
const BillingCycleConnect = connect(null, mapDispatchToProps)(BillingCycle)
export {BillingCycleConnect}