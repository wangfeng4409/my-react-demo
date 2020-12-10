import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './login/Login'
import Home from './home/Home'

// export default class App extends Component {
//   render() {
//     return (
//       <div id="app">
//         <Login />
//         {/* <Home /> */}
//       </div>
//     )
//   }
// }

// const appRouter = <Router history={browserHistory}>
//   <Route path="/">
//     <IndexRedirect to="login" />
//     <Route path="login" component={Login} />
//     <Route path="home" component={Home} />
//   </Route>
// </Router>

const appRouter = <BrowserRouter>
  <Switch>
    <Route exact path="/" render={()=>(<Redirect to='/login' />)} />
    <Route path="/login" component={Login} />
    <Route path="/home" component={Home} />
  </Switch>
</BrowserRouter>

ReactDOM.render(appRouter,
  document.getElementById('root')
);
