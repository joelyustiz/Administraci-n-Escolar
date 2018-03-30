'use strict'
import React, { Component } from 'react'
import NavLayout from '../components/nav-layout'
import NavOption from '../components/nav-option'
class Nav extends Component {
    
    render(){
        return(
            <NavLayout>
                <NavOption/>
            </NavLayout>
        )
    }
}
export default Nav;