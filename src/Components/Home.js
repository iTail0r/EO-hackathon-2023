import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';
//import { Link } from 'react-router-dom';

class Home extends Component {
    render(){
        return(
            <div>
              <h1> Home Page </h1>
                <h2>
                    <Link to="/profilepage"> Begin Profile </Link>
                </h2>
            </div>
        )
    }
}
export default Home
