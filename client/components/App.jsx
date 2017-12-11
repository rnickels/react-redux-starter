import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'

const Hello = () => (
  <div>Hello!</div>
)

const World = () => (
  <div>World!</div>
)

const Home = () => (
  <div>Home!</div>
)

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <h1>Hello World!</h1>
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/hello' component={Hello} />
          <Route exact path='/world' component={World} />
        </Switch>
      </div>
    )
  }
}
