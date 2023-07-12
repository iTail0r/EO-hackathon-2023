import React, { Component } from 'react';

class Home extends Component {
    render(){
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '90vh'
                }}
                >
                    <h1> iTailor </h1>
                    <p>
                    Please Create an Experience
                    </p>
            </div>
          )
        }
    }

export default Home;
