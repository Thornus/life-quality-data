import React, { Component } from 'react';
import FilterableDropdown from './search-components/FilterableDropdown';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <FilterableDropdown/>
      </div>
    );
  }
}

export default Search;
