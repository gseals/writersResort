import React from 'react';

import postingData from '../../../helpers/data/postingData';
import authData from '../../../helpers/data/authData';

import './Create.scss';

class Create extends React.Component {
  state= {
    newFeedbackType: '',
    newGoal: '',
    newBodyText: '',
  }

  newFeedback = (e) => {
    e.preventDefault();
    this.setState({ newFeedbackType: e.target.value });
  }

    newGoal = (e) => {
      e.preventDefault();
      this.setState({ newGoal: e.target.value });
    }

    newBodyText = (e) => {
      e.preventDefault();
      this.setState({ newBodyText: e.target.value });
    }

    savePostingEvent = (e) => {
      e.preventDefault();
      const newPosting = {
        feedbackType: this.state.newFeedbackType,
        goal: this.state.newGoal,
        bodyText: this.state.newBodyText,
        uid: authData.getUid(),
      };
      postingData.savePosting(newPosting)
        .then(() => this.props.history.push('/posts/all'))
        .catch((err) => console.error('error from save posting', err));
    }

    render() {
      const { newFeedbackType, newGoal, newBodyText } = this.state;
      return (
      <div className="Create">
        <h1>Create a Post</h1>
        <h4>What would you like feedback on?</h4>
        <form className="Create col-6 m-auto">
        <div className="form-group">
          <h3><label htmlFor="feedbackType"></label></h3>
          <input
          type="textarea"
          className="form-control"
          id="feedbackType"
          placeholder="What sort of feedback are you looking for?"
          value={newFeedbackType}
          onChange={this.newFeedback}
          />
        </div>
        <div className="form-group">
          <h3><label htmlFor="goal"></label></h3>
          <input
          type="text"
          className="form-control"
          id="goal"
          placeholder="What journal or journals are you considering?"
          value={newGoal}
          onChange={this.newGoal}
          />
        </div>
        <div className="form-group">
          <h3><label htmlFor="bodyText"></label></h3>
          <input
          type="text"
          className="form-control"
          id="bodyText"
          placeholder="Paste your work here"
          value={newBodyText}
          onChange={this.newBodyText}
          />
        </div>
    <button className="btn btn-success" onClick={this.savePostingEvent}>Post</button>
      </form>
      </div>
      );
    }
}

export default Create;
