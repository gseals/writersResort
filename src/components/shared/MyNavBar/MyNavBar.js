import React from 'react';

import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';

import PropTypes from 'prop-types';

import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavBar.scss';

class MyNavBar extends React.Component {
  state = {
    isOpen: false,
  }

  static propTypes = {
    authed: PropTypes.bool,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  toggleNav = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { authed, userStuff } = this.props;
    const userPath = this.props.userStuff.uid;

    const buildNavBar = () => {
      if (authed) {
        return (
        <Nav className="navbar-nav ml-auto">
          <div className="d-flex flex-row">
          <img className="userImg" src={userStuff.photoURL} alt="current user"/><p id={userStuff.uid} className="navFont profileBackground" to={`/achievements/${userPath}`}>Welcome, {userStuff.displayName}</p>
          </div>
          <NavItem className="nav-item">
            <Link className="nav-link navFont btn btn-info" to="/posts/all">All Posts</Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link className="nav-link navFont btn btn-info" to="/posts/create">Create Post</Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link className="nav-link navFont btn btn-danger" onClick={this.logMeOut}>Logout</Link>
          </NavItem>
        </Nav>
        );
      }

      return (<ul className="navbar-nav ml-auto"></ul>);
    };

    return (
      <div className="MyNavBar">
                <Navbar color="light" light expand="md" className="navbar navbar-expand-lg">
                  <NavItem>
              <Link className="navbar-brand btn btn-info removeMarginRight" to="/">writersResort</Link>
              </NavItem>
              <NavItem>
              <Link className="navbar-brand btn btn-info removeMarginRight" to="/about">About</Link>
              </NavItem>
              <NavbarToggler onClick={this.toggleNav} className="toggler" />

          <Collapse isOpen={this.state.isOpen} navbar>
          { buildNavBar() }
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavBar;
