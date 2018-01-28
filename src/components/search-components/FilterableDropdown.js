import React, { Component } from 'react';
import DropdownOption from './DropdownOption';
import CountryNames from '../../data/CountryNames';

class FilterableDropdown extends Component {
  state = {
  	filterText: '',
  	searchClassName: 'searchInput'
  }

  filter(e) {
  	let filterText = e.target.value;
  	let dropdownClasses = this.dropdown.className;

  	if(!dropdownClasses.includes('show')) {
  		this.dropdown.className += ' show';
  		this.toggleSearchField();
  	}

  	this.setState({filterText: filterText.toUpperCase()});  
  }

  toggleSearchField() {
  	let className = this.state.searchClassName;
  	className.includes('inUse') ? className -= ' inUse' : className += ' inUse';

  	this.setState({
  		searchClassName: className
  	});
  }

  getDropdownOptions() {
	let dropdownOptions = [];

	for (let countryCode in CountryNames) {
		let country = CountryNames[countryCode];

		if(country.startsWith(this.state.filterText)) {
			dropdownOptions.push(<DropdownOption country={country} countryCode={countryCode} key={countryCode}/>);
		}
	}

	return dropdownOptions;
  }

  render() {
	let dropdownOptions = [];
	if(this.state.filterText.length > 0) {
		dropdownOptions = this.getDropdownOptions();
	}

    return (
    	<div id="FilterableDropdown">
	    	<input type="text" placeholder="Any country" className={this.state.searchClassName}
	    		onKeyUp={this.filter.bind(this)}/>
	     	<div className="dropdown-content" ref={ (dropdown) => { this.dropdown = dropdown; }}>
			    {dropdownOptions}
		  	</div>
	  	</div>
    );
  }
}

export default FilterableDropdown;
