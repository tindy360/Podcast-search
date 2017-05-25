import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Search from '../src/components/Search/Search';
import Splash from '../src/components/splash/Splash';
import Results from '../src/components/Results/Results';
import Favorites from '../src/components/Favorites/Favorites';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={'/'} component={Splash} />
          <Route exact path={'/search'} component={Search} />
          <Route exact path={'/results'} component={Results} />
          <Route exact path={'/favorites'} component={Favorites} />
        </div>
      </Router>
    );
  }
}

export default App;
