import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<News />} />
          </Routes>
        </Router>
      </>
    );
  }
}
