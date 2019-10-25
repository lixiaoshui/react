import React, { Component } from 'react'
import Protal from './Protal';
export default class ParentProtal extends Component {
    handelClick = ()=>{
        console.log('ParentprotalClick');
    }
    render() {
        return (
            <div onClick={this.handelClick}>
                <Protal />
            </div>
        )
    }
}
