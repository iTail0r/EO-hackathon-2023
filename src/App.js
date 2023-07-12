import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/index.js';
import Home from './Components/pages/Home.js';
import About from './Components/pages/about.js';



class App extends Component {
  render(){
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/about' element={<About/>}/>
        </Routes>
    </Router>
  );
  }
}

export default App;
