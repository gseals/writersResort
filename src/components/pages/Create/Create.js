import React from 'react';

import postingData from '../../../helpers/data/postingData';
import authData from '../../../helpers/data/authData';

import './Create.scss';

class Create extends React.Component {
  state= {
    newFeedbackType: '',
    newGoal: '',
    newTitle: '',
    newBodyText: '',
  }

  newFeedbackAction = (e) => {
    e.preventDefault();
    this.setState({ newFeedbackType: e.target.value });
  }

  newGoalAction = (e) => {
    e.preventDefault();
    this.setState({ newGoal: e.target.value });
  }

  newTitleAction = (e) => {
    e.preventDefault();
    this.setState({ newTitle: e.target.value });
  }

  newBodyTextAction = (e) => {
    e.preventDefault();
    this.setState({ newBodyText: e.target.value });
  }

  makePostingDate = () => {
    const feed = new Date();
    const date = feed.getDate();
    const month = feed.getMonth() + 1;
    const year = feed.getFullYear();
    const feedbackDateString = `${year}-${month}-${date}`;
    return feedbackDateString;
  }

    savePostingEvent = (e) => {
      e.preventDefault();
      const newPosting = {
        feedbackType: this.state.newFeedbackType,
        goal: this.state.newGoal,
        title: this.state.newTitle,
        date: this.makePostingDate(),
        bodyText: this.state.newBodyText,
        displayName: authData.getDisplayName(),
        uid: authData.getUid(),
      };
      postingData.savePosting(newPosting)
        .then(() => this.props.history.push('/posts/all'))
        .catch((err) => console.error('error from save posting', err));
    }

    render() {
      const {
        newFeedbackType,
        newGoal,
        newTitle,
        newBodyText,
      } = this.state;
      return (
        <div>
        <div className="quote-container note1">
        <i className="pin1"></i>
        <blockquote>
        Remember, the clearer you are with the kind of feedback you're looking for, the better the advice you receive can be.
        </blockquote>
      </div>
      <div className="quote-container note2">
        <i className="pin1"></i>
        <blockquote>
        There are lots of journals looking for work like yours. Consider looking at <a href="https://www.submittable.com/" target="_blank" rel="noopener noreferrer">Submittable</a> for open opportunities.
        </blockquote>
      </div>
      <div className="quote-container note3">
        <i className="pin1"></i>
        <blockquote>
        Before you post, re-read your work. Any typos? Are the lines broken as you like them? A proofread piece is easier to review.
        </blockquote>
      </div>
      <div className="Create col-10 m-auto">
        <h1 className="textColor">Create a Post</h1>
        <h4 className="textColor">What would you like feedback on?</h4>
        <form onSubmit={this.savePostingEvent} className="Create col-6 m-auto">
        <div className="form-group">
          <h3><label htmlFor="feedbackType"></label></h3>
          <textarea
          type="text"
          className="form-control"
          id="feedbackType"
          placeholder="What sort of feedback are you looking for? What needs work?"
          value={newFeedbackType}
          onChange={this.newFeedbackAction}
          required
          />
        </div>
        <div className="form-group">
          <h3><label htmlFor="goal"></label></h3>
          <textarea
          type="text"
          className="form-control"
          id="goal"
          placeholder="What journal or journals are you considering?"
          value={newGoal}
          onChange={this.newGoalAction}
          required
          />
        </div>
        <div className="form-group">
          <h3><label htmlFor="title"></label></h3>
          <input
          type="text"
          className="form-control"
          id="title"
          placeholder="What is the title of your work?"
          value={newTitle}
          onChange={this.newTitleAction}
          required
          />
        </div>
        <div className="form-group">
          <h3><label htmlFor="bodyText"></label></h3>
          <textarea
          type="text"
          className="form-control"
          id="bodyText"
          placeholder="Paste or write your work here"
          value={newBodyText}
          onChange={this.newBodyTextAction}
          required
          />
        </div>
    <button type="submit" className="btn btn-success">Post</button>
      </form>
      </div>
      </div>
      );
    }
}

export default Create;
