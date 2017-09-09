import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import WorldMap from '../components/WorldMap';
import Header from'../components/Header';


class Home extends Component {
  render() {
    return (
    	<div id="wrapper">
		    <Header />
	    	<WorldMap />
	    </div>
    );
  }
}

export default Home;
      