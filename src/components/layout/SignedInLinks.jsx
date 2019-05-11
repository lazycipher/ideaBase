import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';


const SignedInLinks = (props) => {
  const { profile } = props;
  return(
      <ul className="right">
        <li><NavLink to="/newIdea">Share Idea</NavLink></li>
        <li><a href="#" onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to="/" className="btn btn-floating blue, lighten-1">{ profile.initials }</NavLink></li>
      </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
