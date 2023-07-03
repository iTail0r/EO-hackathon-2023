import React, { Component } from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';

class ProfilePage extends Component {
    render(){
        return(
            <dviv>
              <h1> Profile Page </h1>
              <h2>
                    <Link to="/"> Return Home </Link>
                </h2>
            </dviv>
        )
    }
}
export default ProfilePage
