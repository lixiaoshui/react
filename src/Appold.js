import React, { Component } from 'react'
import {BrowserRouter as Router,withRouter,Route,Switch,Redirect} from 'react-router-dom';
import Hoc from './Hoc/Hoc';
import Parent from './Context/Parent';
import Sider from './Sider';
import NoMatch from './NoMatch';
import Content from './Router/Content';
import Hooks from './Router/Hooks';

function Login(props){
  console.log(props);
  return <button>登陆</button>
}
let LoginWithRouter = withRouter(Login)


export default class App extends Component {
    render() {
        return (
            <Router basename="/build">
                <div>
                    <Login/>
                    <Sider/>
                    <div style={
                        {float:'left',
                        border:'2px solid red',
                        marginLeft: 100}
                    }>
                    <Switch>
                        <Route exact path='/hoc' component={Hoc} />
                        <Route path='/parent' component={Parent}/>
                        {/* <Redirect from='/old' to='/hoc'/> */}
                        <Route path='/old' render={()=><Redirect to='/hoc'/>}/>
                        <Route path='/content/:id' component={Content}/>
                        <Route path='/hooks/:id' component={Hooks}/>
                        <Route>
                            <NoMatch/>
                        </Route>
                    </Switch>
                    </div>
                </div>  
            </Router>
        )
    }
}
{/* <RouterContext.Provider value={props}>
              {props.match
                ? children
                  ? typeof children === "function"
                    ? __DEV__
                      ? evalChildrenDev(children, props, this.props.path)
                      : children(props)
                    : children
                  : component
                  ? React.createElement(component, props)
                  : render
                  ? render(props)
                  : null
                : typeof children === "function"
                ? __DEV__
                  ? evalChildrenDev(children, props, this.props.path)
                  : children(props)
                : null}
</RouterContext.Provider> */}