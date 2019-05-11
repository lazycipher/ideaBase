import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';


const SignedInLinks = () => {
  return(
      <ul className="right">
        <li><NavLink to="/newIdea">Share Idea</NavLink></li>
        <li><NavLink to="/">Log Out</NavLink></li>
        <li><NavLink to="/" className="btn btn-floating blue, lighten-1">HS</NavLink></li>
      </ul>
  )
}


export default SignedInLinks;
