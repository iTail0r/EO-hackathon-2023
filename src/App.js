import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import './App.css';
import ProfilePage from './Components/ProfilePage.js';
import Results from './Components/Results.js';



class App extends Component {
  render(){
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path ="/" Component={Home}/>
          <Route exact path ="/profilepage" Component={ProfilePage}/>
          <Route exact path ="/results" Component={Results}/>
        </Routes>
      </div>
    </Router>
  );
  }
}

export default App;
