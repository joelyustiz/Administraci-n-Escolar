import React, { Component } from 'react'
import PersonalLayout from '../components/personal-layout'
import BotoneraPersonal from '../../widgets/containers/botonera-personal'
import TableEjemplo from '../../widgets/components/table'
import FormPersonal from '../../form/components/form-personal'
class Personal extends Component {
    render(){
        return(
            <PersonalLayout>
                <BotoneraPersonal/>
                <TableEjemplo/>
                {/* <FormPersonal/> */}
            </PersonalLayout>
        )
    }
}

export default Personal;