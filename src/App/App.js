import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import './App.scss';

import firebase from 'firebase/app';
import 'firebase/auth';

import firebaseConnection from '../helpers/data/connection';
import MyNavBar from '../components/shared/MyNavBar/MyNavBar';

import About from '../components/pages/About/About';
import Auth from '../components/pages/Auth/Auth';
import AllPosts from '../components/pages/AllPosts/AllPosts';
import Create from '../components/pages/Create/Create';
import Feedback from '../components/pages/Feedback/Feedback';
import Achievements from '../components/pages/Achievements/Achievements';
import Update from '../components/pages/Update/Update';
import AchievementForm from '../components/pages/AchievementForm/AchievementForm';


const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
    userStuff: '',
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((userStuff) => {
      if (userStuff) {
        console.log('user', userStuff);
        this.setState({ authed: true, userStuff });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed, userStuff } = this.state;
    return (
    <div className="App">
      <Router>
        <MyNavBar authed={authed} userStuff={userStuff}/>
        <Switch>
          <PublicRoute path="/auth" exact component={Auth} authed={authed}/>
          <Route path="/about" exact component={About} authed={authed}/>
          <PrivateRoute path="/" exact component={AllPosts} authed={authed} userStuff={userStuff}/>
          <PrivateRoute path="/posts/all" exact component={AllPosts} authed={authed} userStuff={userStuff}/>
          <PrivateRoute path="/posts/create" exact component={Create} authed={authed}/>
          <PrivateRoute path="/posts/:postPathId/feedback" exact component={Feedback} authed={authed}/>
          <PrivateRoute path="/posts/:postPathId/update" exact component={Update} authed={authed}/>
          {/* <PrivateRoute path="/achievements/:userPath" exact component={Achievements} authed={authed}/>
          <PrivateRoute path="/achievements/:userPath/form" exact component={AchievementForm} authed={authed}/> */}
        </Switch>
      </Router>
    </div>
    );
  }
}

export default App;
