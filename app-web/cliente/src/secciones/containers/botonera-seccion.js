import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux'


import * as actions from '../../actions'
import SeccionButton from '../components/seccion-button'
import BotoneraLayout from '../components/botonera-layout'
import PanelControlSecciones from '../components/panel-control-secciones'
class BotoneraSeccion extends Component {
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
              Secciones
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Información
            </NavLink>
          </NavItem> */}
        </Nav>


        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
          {
            this.props.seccionElegida ?<SeccionButton></SeccionButton> : ""//: <PanelControlSecciones />
          }
               
          </TabPane>

          <TabPane tabId="2">
            <Row>
              <Col sm="2">
                <Card body>
                  <h4>Matricula:</h4>
                  <h5><strong>25</strong></h5>
                </Card>
              </Col>
              <Col sm="4">
                <Card body>
                  <h4>Docentes</h4>
                  <h5>Maria Dulces</h5>
                  <h5>Carmen perez</h5>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </BotoneraLayout>
       
    );
  }
}

function mapStateToProps(state, props) {
  const seccionElegida = state.get('pageSecciones').get('seccionElegida')
  return {
    seccionElegida
  }
}
export default connect(mapStateToProps)(BotoneraSeccion);