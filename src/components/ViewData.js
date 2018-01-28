import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import InfoCard from './InfoCard';
import leftArrowImg from '../img/leftArrow.png'

class ViewData extends Component {
  render() {
    return (
      <div id="view-data">
        <Link to="/" id="left-arrow-link"><img src={leftArrowImg}/></Link>

        <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionLeaveTimeout={200}
        transitionName="SlideInFromAbove"> 
          <InfoCard countryCode={this.props.match.params.code}/>
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default ViewData;
