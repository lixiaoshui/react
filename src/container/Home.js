import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';

export default class Home extends Component {
    render() {
        let {url} = this.props.match
        //console.log(this.props.match.url)//   /home
        return (
            <div>
                <div>
                    <Link to={`${url}/all`}>全部</Link>
                    <Link to={`${url}/jianghua`}>精华</Link>
                    <Link to={`${url}/share`}>分享</Link>
                </div>
                <div>
                    {/* <Route path={url+'/all'} component={All} />
                    <Route path={url+'/jianghua'} component={Jinghua} />
                    <Route path={url+'share'} component={Share} /> */}
                </div>
            </div>
        )
    }
}
