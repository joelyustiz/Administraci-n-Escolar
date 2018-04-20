import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List as list } from 'immutable'
import { bindActionCreators }from 'redux'

import InventarioLayout from '../../pages/components/secciones-layout'

import BotoneraInventario from './botonera-inventario'
import TableEjemplo from '../../widgets/components/table'

class Inventario extends Component {
 
      handleCLickSecciones = event => {
        
        // !this.props.visibilitySeccion ? this.props.seccionActions.openSeccion(2) : this.props.seccionActions.closeSeccion()
      }

    render(){
        return(
            <InventarioLayout>
               <BotoneraInventario/>
                <TableEjemplo></TableEjemplo>
            </InventarioLayout>
        )
        
    }
}


function mapStateToProps(state, props) {
  


  return {
     
  }
  
}

function mapDispatchToProps(dispatch) {
  return {
      // actions: bindActionCreators(actions, dispatch),
      // seccionActions: bindActionCreators(seccionActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Inventario);