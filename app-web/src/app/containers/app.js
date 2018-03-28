//dev
import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
//components
import AppLayout from '../components/app-layout'
import Content from '../components/content'
class App extends Component {
    render(){
        return (
            <AppLayout>
                <Link to="/secciones">Hola</Link>
                <Content body={this.props.children} />
            </AppLayout>
        )
    }
}

export default App;