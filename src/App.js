import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from '../src/components/Header/Header';
import Search from '../src/components/Search/Search';
import Splash from '../src/components/splash/Splash';
import Results from '../src/components/Results/Results';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path={'/'} component={Splash} />
          <Route exact path={'/search'} component={Search} />
          <Route exact path={'/results'} component={Results} />
        </div>
      </Router>
    );
  }
}

export default App;
