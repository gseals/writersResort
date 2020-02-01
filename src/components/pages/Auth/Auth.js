import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import bookImg from '../../../assets/openBook.jpeg';
import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <h1 className="textColor marginTop">writersResort</h1>
        <div className="text-center welcomeBox">
        <img id="openBook" src={bookImg} alt="Open book"/>
        <div className="d-flex justify-content-center">
        <h4 className="textBackground">Welcome to writersResort! Ready to get started?
        Login using Google by clicking the button below. We
        can't wait to read what you're writing!</h4>
        </div>
        </div>
        <button className="btn btn-danger" onClick={this.loginClickEvent}>Login with Google</button>
      </div>
    );
  }
}

export default Auth;
