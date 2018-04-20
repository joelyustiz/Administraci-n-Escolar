import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux'


import * as seccionActions from '../../actions/pages-seccion'
import PanelControlInventario from '../components/panel-control-inventario'
import BotoneraLayout from '../components/botonera-layout'

class BotoneraInventario extends Component {
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

  handleClick = event =>{
    console.log('BOTON')
  }
  render() {
    return (
      <BotoneraLayout>
           <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Herramientas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Información
            </NavLink>
          </NavItem>
        </Nav>


        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
              <PanelControlInventario/>
               
          </TabPane>

        </TabContent>
      </BotoneraLayout>
       
    );
  }
}

function mapStateToProps(state, props) {
 
  return {
    
  }
}
export default connect(mapStateToProps)(BotoneraInventario);