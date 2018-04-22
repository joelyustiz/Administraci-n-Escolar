import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators }from 'redux'
// import { List as list } from 'immutable'

import AlumnosLayout from '../components/alumnos-layout'
import BotoneraAlumnos from './botonera-alumnos'
import Table from '../../widgets/components/table'
import TableAlumnos from '../../table/components/table-alumnos'
import FormALumnos from '../../form/components/form-alumnos'
import * as alumnoActions from '../../actions/pages-alumno'
import * as actions from '../../actions/index'


class Alumnos extends Component {
    state = {
        secciones: false,
    }

    handleCLickSecciones = event => {
        this.setState({
          secciones:true
        })
      }

    handleSubmitForm = event =>{
        event.preventDefault();
        console.log(event.nombreRepresentante.value)
    }

    render(){
        return(
            <AlumnosLayout>

            {!this.props.visibilityAgregarAlumno &&
                <BotoneraAlumnos />
            }
            {!this.props.visibilityAgregarAlumno &&
               <TableAlumnos alumnos={this.props.alumnos}></TableAlumnos>
            }
            {this.props.visibilityAgregarAlumno  &&
                <FormALumnos handleSubmitForm={this.handleSubmitForm}/>
            }
              
            </AlumnosLayout>
        )
    }
}

function mapStateToProps(state, props) {
    const alumnos = state.get('datos').get('alumno');
    const visibilityAgregarAlumno = state.get('pageAlumnos').get('visibilityAgregarAlumno')
    return{
        alumnos,
        visibilityAgregarAlumno
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
        alumnosActions: bindActionCreators(alumnoActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Alumnos)