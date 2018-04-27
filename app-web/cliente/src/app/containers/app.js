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
import { socketConnect } from 'socket.io-react';
class App extends Component {

    constructor(props) {
        super(props);
        this.props.socket.emit('connect', 'Hello world!');

        this.props.socket.on('datos-inicial', (datos)=>{
            console.log('Prueba')
            this.props.actions.AsynActualizarEstado(datos)
        })
    }
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

export default connect(null , mapDispatchToProps)(socketConnect(App));