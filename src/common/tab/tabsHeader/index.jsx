import React from 'react'

export function TabsHeader(props) {
  return (
    <ul className='nav nav-tabs'>
        {props.children}
    </ul>
  )
}
