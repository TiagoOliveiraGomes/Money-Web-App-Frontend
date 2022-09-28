import React from 'react'

export function Content(props) {
  return (
    <section className='content row'>
        {props.children}
    </section>
  )
}
