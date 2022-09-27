import React, { Component } from 'react'
import { Content } from '../../common/template/content'
import { ContentHeader } from '../../common/template/contentHeader'

class DashBoard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>Dashboard</Content>
            </div>
        )
    }
}

export default DashBoard