import React,{Fragment,Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ShowTime} from './ShowTime';
import App from './App';
import Todolist from './ToDolist/Todolist';
import Request from './Request';
import Parent from './Context/Parent'
import {con,con2} from './Context/Context'
import Hoc from './Hoc/Hoc';
import ParentProtal from './Protal/ParentProtal';
import ToDoList from './Todo/ToDoList';
import Todo from './To/Todo';



ReactDOM.render(<App/>,document.getElementById('root'))






// let {Provider,Consumer} = React.createContext();
//Context：
//1、生成Context。可写在一个js文件中，export导出
//2、在根组件上配置Provider，加上value属性
//3、在需要获取数据的组件，import Consumer并配置consumer
//Consumer组件里是个函数，函数的参数是传过来的value值

// let id = 1234;
// ReactDOM.render(
//     <con.Provider value={id}>
//         <div>ddd</div>
//         <con2.Provider value="aaa">
//             <Parent/>
//         </con2.Provider>
//     </con.Provider>,
//     document.getElementById('root')
// )

//引用的文件如果是js文件不用加后缀名，剩下的都要加后缀名
//import导入文件


// function ShowTime(props){
//     console.log(props);
//     return (<React.Fragment>
//                 <div>{props.name}</div>
//                 <div>{new Date().toLocaleString()}</div>
//             </React.Fragment>)
// }

//用类的方式声明一个组件


// 组件交互
// 父组件 ->  子组件：调用子组件时添加属性，子组件通过props拿到传递的数据
// 子组件 ->  父组件：
// ReactDOM.render(<Request />,document.getElementById('root'))





// var num = [1,2,3,4,5];
// ReactDOM.render(
//     <ShowTime name="zhangsan" age={num}/>,
//     document.getElementById("root")
// )



// 显示当前系统时间
// function showTime(){
//     var ele = <div>{new Date().toLocaleString()}</div>;
//     ReactDOM.render(
//         ele,
//         document.querySelector('#root')
//     );
// };
// showTime();
// setInterval(showTime,1000);





// var str = 'react'

// var obj = {
//     type:'div',
//     props:{
//         id:'tit',
//         class:'tit',
//         children:[
//             'hello',
//             'w',
//             'orld',
//             {
//                 type:'h1',
//                 props:{
//                     id:'tit',
//                     class:'tit',
//                     children:[
//                         'hello',
//                         'w',
//                         'orld'
//                     ]
//                 }
//             }
//         ]
//     }
// }

// function render(obj,container){
//     var {type,props} = obj;
//     //文档碎片
//     var fragment = document.createDocumentFragment();//不用传参

//     var ele = document.createElement(type);
//     for(var item in props){
//         if(item === 'class'){
//             ele.className = props[item];
//         }else if(item === 'children'){
//             for(var i=0;i<props[item].length;i++){
//                 if(typeof props.children[i] === 'object'){
//                     render(props.children[i],ele);
//                 }else{
//                     // ele.innerHTML += props.children[i];
//                     var txt = document.createTextNode(props.children[i]);
//                     ele.appendChild(txt);
//                 }
//             }
//         }
//         else{
//             ele[item] = props[item];
//         }
//     }
//     fragment.appendChild(ele);
//     container.appendChild(fragment);
// }
// render(obj,document.getElementById('root'));
//页面渲染过程
// 请求HTML页面，浏览器HTML解析器解析html文件，生成DOM树
// link引入css文件、css解析器解析css，生成css对象模型，CSSOM和DOM树结合生成一个render tree，最后浏览器

//页面回流（重排reflow）:DOM结构变化，内容变化，大小、位置的变化都会引起页面回流
//页面重绘（repaint）:颜色的变化（背景色、字体颜色、边框颜色）

//1、先用变量进行DOM处理，最后一次渲染
/*
console.time('time');
var div = document.getElementById('root')
var str = ''
for(var i=0;i<1000;i++){
    str += '<p>'+i+'</p>';

}
div.innerHTML = str;
console.timeEnd('time');
*/
//2、对于样式的处理,声明一个css类
// var div = document.getElementById('root');
// div.style.width = '100px';
// div.style.height = '100px';
// div.style.background = 'red';
// div.className = 'active';
//3、offsetLeft、offsetWidth等都会引起回流
// console.log(div.offsetLeft);
// var wid = div.offsetWidth;
// setInterval(()=>{
//     wid += 1;
//     div.style.width = wid  + 'px';
// },100)
// 4、文档碎片（内存中的一个变量）


//var ele = <h1 class="tit">hello {obj}</h1>;   //JSX表达式

//babel编译 返回对象
//var ele = React.createElement('h1',{id:'tit',class:'title'},"hello",React.createElement('p',{id:'t',class:'tit'},"react"));
// console.log(ele);
// ReactDOM.render(ele, document.getElementById('root'));

