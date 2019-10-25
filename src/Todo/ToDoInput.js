import React, { Component } from 'react'

export default class ToDoInput extends Component {
    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);
        this.state={};
    }
    handleInput =(e) => {
        if(e.keyCode === 13){
            this.props.add(e.target.value);
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.value]:e.target.value
        })
    }
    render() {
        return (
            <div>
                <div style={{background:'black',width:'100%',height:'50px'}}>
                    <label htmlFor="inp"></label>
                    <input ref="a" id="inp" placeholder="添加ToDo" className="shuru" onChange={this.handleChange} onKeyDown={(e)=>this.handleInput(e)} type="text" />
                </div>                
            </div>
        )
    }
}
