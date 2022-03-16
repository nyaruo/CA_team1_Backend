import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/modules/Header';
import Home from './components/pages/Home';
import Menu1 from './components/pages/Menu1';
import Menu2 from './components/pages/Menu2';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';

import './stylesheets/App.css';
import './stylesheets/signup-in.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/menu1" component={Menu1} />
            <Route path="/menu2" component={Menu2} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
          </main>
        </Router>
    </div>
  )
}

export default App;