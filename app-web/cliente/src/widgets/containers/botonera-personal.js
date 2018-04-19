import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import BotoneraLayout from '../components/botonera-layout'
import PanelControlPersonal from '../components/panel-control-personal'
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
            </Nav>


        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
               <PanelControlPersonal />
          </TabPane>
        </TabContent>
      </BotoneraLayout>
       
    );
  }
}
export default BotoneraALumnos