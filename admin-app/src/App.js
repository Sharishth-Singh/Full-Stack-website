import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Routes,Switch} from "react-router-dom";
import React from 'react';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';

function App() {
   return (
      <div className="App">
      <Router>
         <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
         </Switch>
      </Router>
      </div>
   );
}

export default App;
