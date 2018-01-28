import React, { Component } from 'react';

class DropdownOption extends Component {
	render() {
		let path = "/ViewData/" + this.props.countryCode;

		return (
    		<a href={path}>{this.props.country}</a>
    	);
	}
}

export default DropdownOption;