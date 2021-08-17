import "./App.css";
import React from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import FriendForm from "./components/FriendForm";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import FriendsLogo from "../src/assets/FriendsLogo.png";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>
          {" "}
          <img src={FriendsLogo} alt="Friends Logo" />{" "}
        </h1>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            {localStorage.getItem("token") && (
              <div>
                <Link to="/protected">Protected Page</Link>
              </div>
            )}
          </li>
        </ul>

        <Switch>
          <PrivateRoute exact path="/friends/form" component={FriendForm} />
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <PrivateRoute path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
