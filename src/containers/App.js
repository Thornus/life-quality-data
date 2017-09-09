import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Home from '../components/Home';
import ViewData from '../components/ViewData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>LIFE QUALITY DATA</h1>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/ViewData/:code' component={ViewData}/>
          <Route exact path='*' component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
