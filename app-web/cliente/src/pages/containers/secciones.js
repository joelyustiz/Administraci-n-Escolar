import React, { Component } from 'react'
import SeccionesLayout from '../components/secciones-layout'

import { Table, Button  } from 'reactstrap';
import Botonera from '../../widgets/containers/botonera-seccion'

class Secciones extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

    render(){
        return(
            <SeccionesLayout>
                <Botonera>

                </Botonera>
            </SeccionesLayout>
        )
        
    }
}

export default Secciones;