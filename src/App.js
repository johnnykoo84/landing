import React, { Component } from 'react';
import ReactGA from 'react-ga';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import "./index.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      someData: null,
    };

    // Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
    ReactGA.initialize('UA-114940876-1');
    // This just needs to be called once since we have no routes in this case.
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <HashRouter>
        <div>
          <h1>맨날 개발만 하고... 여친한테 선물 마지막으로 한 게 언제니?</h1>
          <ul className="header">
            <li><NavLink exact to="/">홈</NavLink></li>
            <li><NavLink to="/contact">정체가 뭐냐</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
