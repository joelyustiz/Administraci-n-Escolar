'use strict'
import React, { Component } from 'react'
import NavLayout from '../components/nav-layout'
import NavOption from '../components/nav-option'
import Menu from '../components/menu'
class Nav extends Component {
    
    handleClikMenu = event => {

    }
    render(){
        return(
            <NavLayout>
                <Menu handleClik={this.handleClikMenu}/>
                <NavOption/>
            </NavLayout>
        )
    }
}
export default Nav;