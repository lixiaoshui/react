import React, { Component, Fragment } from 'react'

export default class ToDoing extends Component {
    render(){
        return (
            <div className="nei">
                <h2>正在进行{this.props.ing}</h2>
                <ul>
                    {
                        this.props.todo.map((item,idx)=>{
                            if(!item.panduan){
                                return (
                                    <li key={idx}>
                                        <input checked={item.panduan} type='checkbox' onChange={(e)=>this.props.change(idx)}/>{item.data}
                                        ---<button onClick={()=>this.props.del(idx)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                <h2>已经完成{this.props.pass}</h2>
                <ul>
                    {
                        this.props.todo.map((item,idx)=>{
                            if(item.panduan){
                                return (
                                    <li key={idx}>
                                        <input checked={item.panduan} type='checkbox' onChange={(e)=>this.props.change(idx)}/>{item.data}
                                        ---<button onClick={()=>this.props.del(idx)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}