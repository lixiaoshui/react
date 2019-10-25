import React from 'react'

export default function add(props){
    console.log(props);
    return (
        <div>
            {props.children}
            Content
        </div>
    )
}
