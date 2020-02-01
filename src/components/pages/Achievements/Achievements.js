import React from 'react';
import { Link } from 'react-router-dom';
import './Achievements.scss';

class Achievements extends React.Component {
  state = {
    dataPresent: false,
  }

  render() {
    const { userPath } = this.props.match.params;

    return (
      <div className="Achievements">
        <h1 className="textColor marginTop">Logout Transition</h1>
        <Link className="btn btn-primary" to={`/achievements/${userPath}/form`}>Create Experiences</Link>
      </div>
    );
  }
}

export default Achievements;
