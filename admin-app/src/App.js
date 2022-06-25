import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Routes,Switch} from "react-router-dom";
import React, {useEffect} from 'react';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';


function App() {
   return (
      <div className="App">
      <Router>
         <Switch>
            <PrivateRoute path="/" exact component={Home} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
         </Switch>
      </Router>
      </div>
   );
}

export default App;
