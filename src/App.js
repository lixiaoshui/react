import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './container/Home';
import Start from './container/Start';
import Api from './container/Api';
import About from './container/About';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                </div>
                <div className='content'>
                    <div className='content1'>
                        <Route path='/home' component={Home} />
                        <Route path='/start' component={Start} />
                        <Route path='/api' component={Api} />
                        <Route path='/about' component={About} />
                    </div>
                    <div className='content2'>
                        
                    </div>
                </div>
            </Router>
        )
    }
}
