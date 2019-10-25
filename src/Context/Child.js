import React, { Component } from 'react';
import {con,con2} from './Context'

export default class Child extends Component {
    render() {
        console.log(this.context);
        return (
            
            <div>
                子组件
                <div>{this.context}</div>
                {/* 上面这一行和最后一行一起用 作用相当于下面注释掉的代码   第二行必不可少！ */}
                {/* <con.Consumer>
                    {
                        (id)=><div>{id}</div>
                    }
                </con.Consumer> */}
                
            </div>
        )
    }
}
Child.contextType = con2;
