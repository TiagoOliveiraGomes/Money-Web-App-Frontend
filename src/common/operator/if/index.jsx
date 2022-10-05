import React from 'react'

export function If(props) {
    if(props.test){
        return props.children
    }else {
        return false
    }
}
