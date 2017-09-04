import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InfoCard from './InfoCard';
import leftArrowImg from '../img/leftArrow.png'

class ViewData extends Component {

  render() {
    /*if(this.state.error) {
      return (
        <Route render={( {history} ) => (
            history.push('/')
        )} />
      )
    }
    */
    
    return (
      <div id="view-data">
        <Link to="/"><img id="left-arrow-img" src={leftArrowImg}/></Link>
        <InfoCard countryCode={this.props.match.params.code}/>
      </div>
    );
  }
}

export default ViewData;
