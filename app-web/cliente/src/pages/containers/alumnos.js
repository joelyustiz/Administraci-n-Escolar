import React, { Component } from 'react'
import AlumnosLayout from '../components/alumnos-layout'
import BotoneraAlumnos from '../../widgets/containers/botonera-alumnos'
import Table from '../../widgets/components/table'
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
                <Table/>
            </AlumnosLayout>
        )
    }
}

export default Alumnos;