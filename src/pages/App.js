import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
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

const appRouter = <Router history={browserHistory}>
<Route path="/">
  <IndexRedirect to="login" />
  <Route path="login" component={Login} />
  <Route path="home" component={Home} />
</Route>
</Router>

ReactDOM.render(appRouter,
  document.getElementById('root')
);
