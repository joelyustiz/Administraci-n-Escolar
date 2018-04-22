import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
        <div className="buttonDrop">
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret color="primary">
                Filtrar Alumnos
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem header>Alumnos Activos</DropdownItem>
                
                <DropdownItem>Activos</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Inactivos</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        </div>
      
    );
  }
}