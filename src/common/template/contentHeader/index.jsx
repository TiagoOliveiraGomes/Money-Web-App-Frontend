import React from 'react'

export function ContentHeader(props) {
  return (
    <section className='content-header'>
        <h1>
            {props.title}
            <small>{props.small}</small>
        </h1>
    </section>
  )
}
