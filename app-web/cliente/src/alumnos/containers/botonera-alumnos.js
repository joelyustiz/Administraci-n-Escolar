import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import BotoneraLayout from '../components/botonera-layout'
import PanelControlAlumnos from '../components/panel-control-alumnos'
class BotoneraALumnos extends Component {
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
               <PanelControlAlumnos />
          </TabPane>

          <TabPane tabId="2">
            <Row>
              <Col sm="2">
                <Card body>
                 <h5>Cantidad de alumnos</h5>
                 <h6>110</h6>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
               
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </BotoneraLayout>
       
    );
  }
}
export default BotoneraALumnos
