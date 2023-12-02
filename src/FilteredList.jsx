import React, { Component } from 'react';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    this.state = {
      search: "",
      type: ""
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  //Sets the state whenever the user types on the type filter input
  onFilter = (event) => {
    this.setState({ type: event.target.value.trim().toLowerCase() });
  }

  filterItem = (item) => {
    const search = this.state.search;
    const type = this.state.type;

    if (search && type) {
      return item.name.toLowerCase().includes(search) && item.type.toLowerCase() === type;
    } else if (search) {
      return item.name.toLowerCase().includes(search);
    } else if (type) {
      return item.type.toLowerCase() === type;
    } else {
      return true;
    }
  }

  render(){
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        <input type="text" placeholder="Search" value={this.state.search} onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
