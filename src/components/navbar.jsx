import React, { Component } from 'react';

const Navbar = (props) => {         // Stateless functional Component
    return ( 
        <nav className= "navbar navbar-dark bg-dark">
            <a className= "navbar-brand" href= "#"> Navbar 
            <span 
            className= "badge badge-pill badge-success m-2"> {props.totalCounter}
            </span>
            </a>               
        </nav>
        );
    };
 

export default Navbar;