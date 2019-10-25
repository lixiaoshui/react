import React from 'react'
import {useHistory} from 'react-router-dom';
//无状态组件（函数组件）
export default class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
        // this.history = useHistory();
        console.log(this.history);
    }
    componentDidMount(prevProps,prevState){
        let page = this.props.match.params.id;//第几个页面
        fetch('https://cnodejs.org/api/v1/topics?page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                })
            })
    }
    componentDidUpdate(prevProps,prevState){//每次更新完才会执行
        if(prevProps.match.params.id !== this.props.match.params.id){
            let page = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({
                        data:res.data
                    })
                })
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.data.map((item)=>(
                        <div style={{border:'1px solid red',width:500,height:200,overflow:'hidden'}} key={item.id}>
                            <h2>{item.title}</h2>
                            <div dangerouslySetInnerHTML={{__html:item.content}}></div>
                        </div>
                    ))
                }
            </div>
        )
    }
}


