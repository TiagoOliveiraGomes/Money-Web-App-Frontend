import React from 'react'

export function TabsList(props) {
  return (
    <ul className='nav nav-tabs'>
        {props.children}
    </ul>
  )
}
