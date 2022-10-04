import React from 'react'

export function TabHeaderList(props) {
  return (
    <ul className='nav nav-tabs'>
        {props.children}
    </ul>
  )
}
