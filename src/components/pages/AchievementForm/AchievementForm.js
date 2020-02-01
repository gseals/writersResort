import React from 'react';
import userData from '../../../helpers/data/usersData';
import authData from '../../../helpers/data/authData';
import './AchievementForm.scss';

class AchievementForm extends React.Component {
  state = {
    newExperience: ' ',
  }

  newExperienceAction = (e) => {
    e.preventDefault();
    this.setState({ newExperience: e.target.value });
  }

  saveExperienceEvent = (e) => {
    e.preventDefault();
    const newUser = {
      experience: this.state.newExperience,
      uid: authData.getUid(),
    };
    userData.makeUser(newUser)
      .then(() => this.props.history.push('/posts/all'))
      .catch((err) => console.error('error from save user', err));
  }

  render() {
    const { newExperience } = this.state;
    return (
      <div className="AchievementForm col-10 m-auto">
        <h1 className="textColor marginTop">What writing experiences do you have?</h1>
        <form onSubmit={this.saveExperienceEvent} className="Create col-6 m-auto">
        <div className="form-group">
          <h3><label htmlFor="newExp"></label></h3>
          <textarea
          type="text"
          className="form-control"
          id="newExp"
          placeholder="What sort of feedback are you looking for? What needs work?"
          value={newExperience}
          onChange={this.newExperienceAction}
          required
          />
          <button type="submit" className="btn btn-success">Post</button>
          </div>
          </form>
        </div>
    );
  }
}

export default AchievementForm;
