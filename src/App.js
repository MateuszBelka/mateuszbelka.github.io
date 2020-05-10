import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'; // Using HashRouter due to lack of pushState support on GH pages

import Home from './components/Home';
import About from './components/About';
import './App.css';

/*
  Implement HashRouting to allow subdirectories on gh pages
  https://levelup.gitconnected.com/deploying-a-create-react-app-with-routing-to-github-pages-f386b6ce84c2
  https://reacttraining.com/react-router/
*/

class App extends Component {
  state = {

  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about/">
            <About />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
