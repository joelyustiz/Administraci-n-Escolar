import React, { Component } from 'react'
import { connect } from 'react-redux'

import AlumnosLayout from '../components/alumnos-layout'
import BotoneraAlumnos from '../../widgets/containers/botonera-alumnos'
import Table from '../../widgets/components/table'
import TableAlumnos from '../../table/components/table-alumnos'
import FormALumnos from '../../form/components/form-alumnos'
class Alumnos extends Component {
    state = {
        secciones: false,
    }

    handleCLickSecciones = event => {
        this.setState({
          secciones:true
        })
      }

    render(){
        return(
            <AlumnosLayout>
               <BotoneraAlumnos /> 
               <TableAlumnos alumnos={this.props.alumnos}></TableAlumnos>
               {/* <FormALumnos/> */}
            </AlumnosLayout>
        )
    }
}
function mapStateToProps(state, props) {
    const alumnos = state.get('alumnos').get('alumno')
    return{
        alumnos
    }
}
export default connect(mapStateToProps)(Alumnos)