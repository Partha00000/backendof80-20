import React from 'react';
import Login from './Components/Login/Login';
import AddWebsite from './Components/AddWebsite/AddWebsite';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addWebsite">
            <AddWebsite />
          </Route>
        </Switch>
    </Router>
  );
};

export default App;