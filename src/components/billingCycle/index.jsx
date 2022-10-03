import React, { Component } from 'react'
import { Content } from '../../common/template/content'
import { ContentHeader } from '../../common/template/contentHeader'
import { Tabs } from '../../common/tab'
import { TabsList } from '../../common/tab/tabsList'
import { TabsContent } from '../../common/tab/tabsContent'
import { TabHeader } from '../../common/tab/tabHeader'

export default class BillingCycle extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
        <Content>
          <Tabs>
            <TabsList>
              <TabHeader label='Listar' icon='bars' target='tabList' />
              <TabHeader label='Incluir' icon='plus' target='tabCreate' />
              <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
              <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
            </TabsList>
            <TabsContent></TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}
