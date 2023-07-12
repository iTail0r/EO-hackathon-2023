import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Results extends Component {
    render(){
        return(
            <dviv>
              <h1> Results Page </h1>
              <h2>
                    <Link to="/"> Home </Link>
                    <Link to="/profilepage"> Create New Profile </Link>
                </h2>
            </dviv>
        )
    }
}
export default Results