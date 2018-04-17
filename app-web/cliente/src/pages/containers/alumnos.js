import React, { Component } from 'react'
import AlumnosLayout from '../components/alumnos-layout'
import BotoneraSeccion from '../../widgets/containers/botonera-seccion'
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
               <BotoneraSeccion /> 
                <Table/>
            </AlumnosLayout>
        )
    }
}

export default Alumnos;