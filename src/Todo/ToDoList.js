import React, { Component } from 'react'
import ToDoInput from './ToDoInput'
import ToDoing from './ToDoing'
import './ToDoList.css'

export default class ToDoList extends Component {
    constructor(){
        super();
        this.state = {
            todo:JSON.parse(localStorage.getItem('infor'))||[],
            ing:0,
            pass:0
        }
    }
    componentWillMount(){
        this.count();
    }
    addItem = (data)=>{
        console.log(data)
        var a = {
            data:''+data,
            panduan:false
        }
        var todo = [...this.state.todo]
        todo.push(a)
        this.setState({
            todo:todo
        },()=>{
            this.count();
            localStorage.setItem('infor',JSON.stringify(this.state.todo))
        })
    }
    delItem = (idx)=>{
        var todo = [...this.state.todo]
        todo.splice(idx,1)
        this.setState({
            todo:todo
        },()=>{
            this.count()
            localStorage.setItem('infor',JSON.stringify(todo))
        })
    }
    changeItem = (panduan)=>{
        var todo = [...this.state.todo]
        todo[panduan].panduan = !todo[panduan].panduan
        this.count()
        this.setState({
            todo:todo
        },()=>{
            this.count()
            localStorage.setItem('infor',JSON.stringify(todo))
        })
    }
    count=()=>{
        var ing = 0;
        var pass = 0;
        var todo = this.state.todo;
        for(var i=0;i<todo.length;i++){
            if(!todo[i].panduan){
                ing++;
            }else{
                pass++;
            }
        }
        this.setState({
            ing:ing,
            pass:pass
        })
    }
    render() {
        return (
            <div>
                <ToDoInput add={this.addItem}/>
                <ToDoing del={this.delItem} todo={this.state.todo} change={this.changeItem} panduan={this.state.panduan} ing={this.state.ing} pass={this.state.pass} count={this.count}/>
            </div>
        )
    }
}
