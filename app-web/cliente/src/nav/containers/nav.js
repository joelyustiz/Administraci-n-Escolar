'use strict'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators }from 'redux'

import NavLayout from '../components/nav-layout'
import NavOption from '../components/nav-option'
import Menu from '../components/menu'
import  * as actions from '../../actions' 
import ProfilePhoto from '../components/profile-photo'
import Redes from '../components/redes'
class Nav extends Component {
    handleClickSecciones = event =>{
        this.props.actions.closeSeccion()
    }
    handleClickAlumnos = event =>{
        this.props.actions.closeAll()
    }

    handleClikMenu = event => {

    }
    render(){
        return(
            <NavLayout>
                
                <Menu handleClik={this.handleClikMenu}/>
                <ProfilePhoto/>
                <NavOption 
                    handleClickSecciones={this.handleClickSecciones}
                    handleClickAlumnos={this.handleClickAlumnos}
                />
                <Redes/>
            </NavLayout>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}
export default connect(null, mapDispatchToProps)(Nav);