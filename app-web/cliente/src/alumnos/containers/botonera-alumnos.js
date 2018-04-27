import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux'
import { bindActionCreators }from 'redux'

import BotoneraLayout from '../components/botonera-layout'
import PanelControlAlumnos from '../components/panel-control-alumnos'
import * as actions from '../../actions'

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

  handleClickAgregarALumno = event =>{
    this.props.actions.openAgregarAlumno()
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
               <PanelControlAlumnos handleClickAgregarAlumno={this.handleClickAgregarALumno} />
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

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(BotoneraALumnos)
