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
import Logout from '../components/pages/Logout/Logout';
import Update from '../components/pages/Update/Update';


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
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
    <div className="App">
      <Router>
        <MyNavBar authed={authed} />
        <Switch>
          <PublicRoute path="/auth" exact component={Auth} authed={authed}/>
          <PublicRoute path="/logout" exact component={Logout} authed={authed}/>
          <Route path="/about" exact component={About} authed={authed}/>
          <PrivateRoute path="/" exact component={AllPosts} authed={authed}/>
          <PrivateRoute path="/posts/all" exact component={AllPosts} authed={authed}/>
          <PrivateRoute path="/posts/create" exact component={Create} authed={authed}/>
          <PrivateRoute path="/posts/:postPathId/feedback" exact component={Feedback} authed={authed}/>
          <PrivateRoute path="/posts/:postPathId/update" exact component={Update} authed={authed}/>
        </Switch>
      </Router>
    </div>
    );
  }
}

export default App;
