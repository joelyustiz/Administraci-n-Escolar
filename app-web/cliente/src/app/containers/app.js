//dev
import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
//components
import AppLayout from '../components/app-layout'
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '../../nav/containers/nav'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { bindActionCreators }from 'redux'
class App extends Component {
    componentDidMount(){
        //Solo se lanza una vez
        //Ideal para llamar a una API, hacer un setInteval, etc
        fetch('/estado-inicial').then(res => res.json()).then((res)=>{
            this.props.actions.addTodo(res)
        })
    }
    render(){
        return (
             <AppLayout>
                <Nav />
                {this.props.children}
             </AppLayout>
          
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(null , mapDispatchToProps)(App);