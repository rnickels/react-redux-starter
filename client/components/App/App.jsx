import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import { Home } from '../Home'
import { Login } from '../Login'
import { Registration } from '../Registration'

class App extends React.Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <h1>Hello World!</h1>
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Registration} />
        </Switch>
      </div>
    )
  }
}

export { App }