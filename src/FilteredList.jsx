import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "all",
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  onDropdownSelect = (type) => {
    this.setState({ type });
  }

  filterItem = (item) => {
    const { search, type } = this.state;

    const searchCondition = item.name.toLowerCase().search(search) !== -1;
    const typeCondition = type === "all" || item.type.toLowerCase() === type;

    return searchCondition && typeCondition;
  }

  render() {
    return (
      <div className="App-dropdown">
        {/* Dropdown component with wrapper */}
        <Dropdown onSelect={(eventKey) => this.onDropdownSelect(eventKey)}>
          <Dropdown.Toggle id="typeDropdown">
            Type: {this.state.type.charAt(0).toUpperCase() + this.state.type.slice(1)}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="all">All</Dropdown.Item><br></br>
            <Dropdown.Item eventKey="fruit">Fruit</Dropdown.Item><br></br>
            <Dropdown.Item eventKey="vegetable">Vegetable</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Search input */}
        <input type="text" placeholder="Search" onChange={this.onSearch} />

        {/* List component with filtered items */}
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
