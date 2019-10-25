import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'
import './todo.css'

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo:[1,2,3],
            a:100,
            b:200
        }


        //深拷贝\浅拷贝
        // var obj = {a:100,b:[1,2,3]};
        // var obj1 = {c:300};
        //var o = {...obj};//obj的时候是100  {...obj}的时候是200
        //var o = Object.assign(obj,obj1);//将obj1整合到obj上!!!!!!!!!!!
        //var o = JSON.parse(JSON.stringify(obj));//直接转换成一个普通的字符串 然后再转化为对象  属于深拷贝
        //o.a = 200;
        //o.b[0] = 200;//属于浅拷贝
        // console.log(obj===o);
        // console.log(Object.keys(obj));//obj的属性名组成的数组
        // Object.keys(obj).forEach((item)=>{
        //     console.log(item);
        //     console.log(obj[item]);
        // })
    }
    addItem = (data) => {
        // this.state.todo.push(data); 不行！   不要对状态做出任何处理
        // console.log(data);
        // console.log(this.state.todo);
        this.setState({
            todo:[...this.state.todo,data]
        },()=>{
            localStorage.setItem('',JSON.stringify(this.state.todo))
        })
    }
    delItem = (idx) => {
        //1、不能直接改变或处理state，通过setState改变
        // let todo = [...this.state.todo];
        // todo.splice(idx,1);
        //2、setState是异步执行
        this.setState((state,props)=>{//state是为了拿到前一个值
            console.log(state.todo);
            return {
                todo:state.todo.filter((item,index)=>idx!==index)
            }
        })
        //在setState里获取state可能会出错，不是一开始想要得到的值
        //可以像上面那样，把第一个参数写成state

        // this.setState({
        //     todo:this.state.num +100
        // },()=>{//callback函数 拿到的值是最新的
        //     console.log(this.state.todo);
        // })
    }
    render() {
        return (
            <div>
                <Todoinput add={this.addItem}/>
                <Todoing del={this.delItem} todo={this.state.todo}/>
            </div>
        )
    }
}
