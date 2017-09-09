import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../jquery-jvectormap.css';
import $ from 'jquery';
window.jQuery = window.$ = $;

require('jvectormap-next');
require('../jquery-jvectormap-world-mill.js');

class WorldMap extends Component {
  state = {
    redirect: false,
    code: ""
  };

  componentDidMount() {
    const that = this;

    $('#world-map').vectorMap({
      map: 'world_mill',
      backgroundColor: 'white',
      regionStyle: {
        initial: {
            fill: '#1d61d1',
            "fill-opacity": 1,
            stroke: 'none',
            "stroke-width": 0,
            "stroke-opacity": 1
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: 'pointer'
          }
      },
      onRegionClick: function(e, code) {
        that.worldMap.className += "fade-out";
        setTimeout(() => {
          try {
            that.setState({ redirect: true, code: code })
          }
          catch(err) {}
        }, 500);
      }
    });
  }

  render() {
    if(this.state.redirect) {
      return (
        <Route render={( {history} ) => (
            $(".jvectormap-tip").remove(),
            history.push('/ViewData/'+this.state.code)
        )} />
      );
    }

    return (
      <div id="world-map" ref={ (worldMap) => { this.worldMap = worldMap; }}>
      </div>
    );
  }
}

export default WorldMap;
