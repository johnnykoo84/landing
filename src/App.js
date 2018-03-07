import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';

// Utilities
import ReactGA from 'react-ga';

// Component
import { Home, Contact } from './component';

// Style
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      someData: null
    };
  }

  componentWillMount() {
    // Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
    ReactGA.initialize('UA-114772027-01');
    // This just needs to be called once since we have no routes in this case.
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <HashRouter>
        <div>
          <h1>대한민국 개발자분들 고생 많으십니다</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
          </div>
          <div>
            <h2>쿠스랩</h2>
            <h3>대표: 구일모</h3>
            <h3>사업자등록번호: 606-466-9713</h3>
            <h3>사업장 소재지: 서울특별시 동작구 사당로2길 76 1101호</h3>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
