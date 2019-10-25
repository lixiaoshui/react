import React,{Fragment,Component} from 'react';


class ShowTime extends React.Component{
    constructor(props){
        console.log('constructor');
        super(props);
        this.state = {
            time:new Date().toLocaleString(),
            a:100,
            b:200
        }
        setTimeout(()=>{
            this.setState({//一执行 页面就会重新变
                time:new Date().toLocaleString()
            })
        },1000)
    }
    shouldComponentUpdate(){
        if(this.state.a>10){
            return true;
        }
        return false;
    }
    componentDidUpdate(preProps,preState,data){
        console.log('didupdate');
        console.log(preProps,preState);//56
        console.log(this.state.time);//57多一秒
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshot');

        return {name:this.state.a}
    }
    componentDidMount(){
        console.log('didmount');
    }
    render(){
        console.log('render');
        var {name,age} = this.props;
        return (
            <Fragment>
                {/* 条件渲染 */}
                {name.length>5?<div>姓名：{name}</div>:''}
                {name.length>5&&<div>姓名：{name}</div>}
                <div>{this.state.time}</div>
                
                {/**循环渲染 */}
                <div>
                    {
                        age.map((item,index)=>{
                            if(index%2 == 0){
                                return <p key={index}>{item}</p>
                            }
                        })//找一个能返回数组的方法
                    }
                </div>
            </Fragment>
        )
    }
}
// export default ShowTime;//默认导出用export  文件只能默认导出一次,被引入的文件可以重命名

//命名导出   可以导出多个，被引入时与导出的名一致
//  可以导出函数 常量 ...
export {ShowTime};
export const num =100;


