import {Route, BrowserRouter, Switch} from 'react-router-dom'
import LoginForm from './components2/loginform'
import Home2 from './components2/Home2'
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/home" component={Home2} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
