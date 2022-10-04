import React, { Component } from 'react'
import { Content } from '../../common/template/content'
import { ContentHeader } from '../../common/template/contentHeader'
import { Tabs } from '../../common/tab'
import { TabsList } from '../../common/tab/tabsList'
import { TabsContent } from '../../common/tab/tabsContent'
import { TabHeaderConnect } from '../../common/tab/tabHeader'

export default class BillingCycle extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
        <Content>
          <Tabs>
            <TabsList>
              <TabHeaderConnect label='Listar' icon='bars' target='tabList' />
              <TabHeaderConnect label='Incluir' icon='plus' target='tabCreate' />
              <TabHeaderConnect label='Alterar' icon='pencil' target='tabUpdate' />
              <TabHeaderConnect label='Excluir' icon='trash-o' target='tabDelete' />
            </TabsList>
            <TabsContent></TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}
