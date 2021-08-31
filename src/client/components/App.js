import React from 'react';
import {createBrowserHistory} from 'history';
import {Router, Switch, Route, Redirect} from 'react-router-dom';

import Home from './home.js';
import Create from './techniques/createTechniques.js';
import Categories from './techniques/techniques.js';
import ListTechniques from './techniques/listOfAllTechniques.js';

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/create' component={Create} />
        <Route path='/:category' component={Categories} />
        <Route path='/list' component={ListTechniques} />
      </Switch>
    </Router>
  );
}

export default App;
