import React from 'react'
import './common/template/dependencies'
import { Footer } from './common/template/footer'
import { Header } from './common/template/header'
import { Sidebar } from './common/template/sidebar'
import { Routes } from './routes/routes'

export function App() {
  return (
    <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className='content-wrapper'>
          <Routes />
        </div>
        <Footer />
    </div>
  )
}
