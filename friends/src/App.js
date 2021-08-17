import React from "react";
import Login from "./components/Login";
import FriendForm from "./components/FriendForm";
import FriendList from "./components/FriendList";
import PrivateRoute from "./components/PrivateRoute";
import axiosWithAuth from "./authorization/axiosWithAuth";
import FriendsLogo from "../src/assets/FriendsLogo.png";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";

function App(props) {
  const logout = () => {
    localStorage.removeItem("token");
  };

  const isAuth = localStorage.getItem("token");

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div class="headerImage">
            <img src={FriendsLogo} alt="Friends Logo" />
            <h1></h1>
          </div>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              {!isAuth ? <Link to="/friends">Friends</Link> : <div></div>}
            </li>
            <li>
              {!isAuth ? (
                <Link to="/friends/form">Friends Form</Link>
              ) : (
                <div></div>
              )}
            </li>
            <li>
              <Link onClick={logout}>Logout</Link>
            </li>
          </ul>
        </header>

        <Switch>
          <PrivateRoute exact path="/friends/form" component={FriendForm} />
          <PrivateRoute exact path="/friends" component={FriendList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
