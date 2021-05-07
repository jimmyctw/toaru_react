import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './style/style.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router >
      <div className="App">
        <Header className="header" />
        <Main className="main"/>
        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;
