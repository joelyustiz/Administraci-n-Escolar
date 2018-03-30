//dev
import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
//components
import AppLayout from '../components/app-layout'
import Nav from '../../nav/containers/nav'
class App extends Component {
    render(){
        return (
            <AppLayout>
                <Nav />
            {this.props.children}
            </AppLayout>
        )
    }
}

export default App;