import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <div className='App-header'>
          <h1 className='appName'>LIFE QUALITY DATA</h1>
          <span className='searchText'>CLICK ON A COUNTRY OR <Link to="/Search" id="searchBtn">SEARCH</Link></span>
        </div>
    );
  }
}

export default Header;