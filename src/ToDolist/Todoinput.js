import React, { Component } from 'react'
//受控组件：value值呗react控制的表单元素
//可以实时获取表单元素的值（实现表单验证） 写法相对麻烦
//
export default class Todoinput extends Component {
    // 两种绑定this的方式
    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            a:'',
            b:'',
            c:''
        }
    }
    handleInput =(e) => {
        //绑定this 事件处理函数写成箭头函数，或者用bind
        if(e.keyCode === 13){//敲回车
            //console.log(e.target.value);//获取input框的内容
            this.props.add(e.target.value);
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]:parseInt(e.target.value===''?0:e.target.value)
        })
    }
    componentDidMount(){
        // console.log(this.ref.a);
        this.refs.a.focus();
    }
    render() {
        return (
            <div className={this.state.b+this.state.c>10?'box':''}>
                <label htmlFor="inp">请输入第一个数：</label>{/*点到这行字焦点自动到第一个input框框*/}
                <input ref="a" id="inp" name="a" onChange={this.handleChange} value={this.state.a} onKeyDown={this.handleInput} type="text" />
                {/* <input name="b" onChange={this.handleChange} value={this.state.b} onKeyDown={this.handleInput} type="text" />+
                <input name="c" onChange={this.handleChange} value={this.state.c} onKeyDown={this.handleInput} type="text" />=
                <p>{parseInt(this.state.a+this.state.b+this.state.c)}</p> */}
                {/* 非受控组件：一次性获取或处理表单元素的值 */}
                {/* <input ref='a' type='text' id="inp" /> */}
                {/* <input ref={(inp)=>{this.inp=inp}} type="text"/> */}
                <button
                    style={{color:'red',fontSize:'18px'}}
                    onClick={()=>{this.handleChange()}}>
                    提交
                </button>
            </div>
        )
    }
}
// 受控组件：
// 1、给input标签添加value属性，赋值为state的值
// 2、给input标签绑定onChange事件，
// 在事件处理函数中setState
// 3、一个事件处理函数控制多个表单元素时，
// 给input标签加上name属性,事件处理函数中写：
// setState({[e.target.name]:e.target.value})