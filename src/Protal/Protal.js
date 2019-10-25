import React, { Component } from 'react'
import ReactDOM from 'react-dom';
export default class Protal extends Component {
    handelClick = ()=>{
        console.log('protalClick');
    }
    render() {
        return (
            ReactDOM.createPortal(
                <div>
                    <h1 onClick={this.handelClick}>Protal</h1>
                </div>,
                document.body
            )
        )
    }
}
