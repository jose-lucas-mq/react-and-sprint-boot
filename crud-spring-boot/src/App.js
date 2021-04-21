import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddSecurity from "./components/add-security";
import Security from "./components/security";
import SecurityList from "./components/securities-list";

//files
import Logo from './images/icon.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-sm navbar-dark">
            <a className="navbar-brand" href="/securities">
              <img src={Logo} alt="" />
                      ioTruck
                    </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/securities"} className="nav-link">
                  Security
                        </Link>
              </li>
              <li className="nav-item"> 
                  <Link to={"/add"} className="nav-link">
                  Add
                  </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/securities"]} component={SecurityList} />
              <Route exact path="/add" component={AddSecurity} />
              <Route path="/securities/:id" component={Security} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;