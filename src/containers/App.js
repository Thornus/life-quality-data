import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from '../components/Home';
import Search from '../components/Search';
import ViewData from '../components/ViewData';
import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Search' component={Search}/>
          <Route exact path='/ViewData/:code' component={ViewData}/>
          <Route exact path='*' component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
