import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { history } from './helpers/history'
import Home from './components/Home'
import People from './components/People'
import StarShips from './components/StarShips'
import NoMatch from './components/NoMatch'


const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Route path='/home' component={Home} />
        <Route path='/people' component={People} />
        <Route path='/starships' component={StarShips} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
