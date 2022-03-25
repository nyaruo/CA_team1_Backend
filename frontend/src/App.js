import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Timer from './components/pages/TimerPage';
import Menu2 from './components/pages/Menu2';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Title from './components/pages/Title';

import './stylesheets/App.css';
import './stylesheets/signup-in.css';

import PrivateRoute from './utils/PrivateRoutes';
import { AuthProvider } from './context/AuthContext';
import Header from "./components/modules/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <main>
            <Header/>
            <Route path="/title" component={Title} exact/>
            <PrivateRoute path="/" component={Home}/>
            <PrivateRoute path="/timer" component={Timer} />
            <PrivateRoute path="/menu2" component={Menu2} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
          </main>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App;
