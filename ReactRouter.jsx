import Nav from './components/Nav'
import About from './components/About'
import Shop from './components/Shop'
import Home from './components/Home'
import Details from './components/Details'
import Error from './components/Error'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const ReactRouterApp = () =>{
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/shop' exact component={Shop} />
        <Route path = '/shop/:id' component = {Details}/>
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default ReactRouterApp
