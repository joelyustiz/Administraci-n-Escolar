import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class BDI extends React.Component {
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
                Filtrar Alimentos
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem header>Alimentos</DropdownItem>
                <DropdownItem>Todos</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Fecha de caducidad</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Frutas</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Verduras</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        </div>
      
    );
  }
}