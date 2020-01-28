import React from 'react';

import postingData from '../../../helpers/data/postingData';
import authData from '../../../helpers/data/authData';

import './Update.scss';

class Update extends React.Component {
  state = {
    updateFeedbackType: ' ',
    updateGoal: ' ',
    updateTitle: ' ',
    updateBodyText: ' ',
  }

  componentDidMount() {
    const { postPathId } = this.props.match.params;
    if (postPathId) {
      postingData.getSinglePostData(postPathId)
        .then((request) => {
          const post = request.data;
          this.setState({
            updateFeedbackType: post.feedbackType,
            updateGoal: post.goal,
            updateTitle: post.title,
            updateBodyText: post.bodyText,
          });
        })
        .catch((err) => console.error('error with get single post', err));
    }
  }

    editFeedback = (e) => {
      e.preventDefault();
      this.setState({ updateFeedbackType: e.target.value });
    }

    editGoal = (e) => {
      e.preventDefault();
      this.setState({ updateGoal: e.target.value });
    }

    editTitle = (e) => {
      e.preventDefault();
      this.setState({ updateTitle: e.target.value });
    }

    editBodyText = (e) => {
      e.preventDefault();
      this.setState({ updateBodyText: e.target.value });
    }

    editPostEvent = (e) => {
      e.preventDefault();
      const { postPathId } = this.props.match.params;
      const editPost = {
        feedbackType: this.state.updateFeedbackType,
        goal: this.state.updateGoal,
        title: this.state.updateTitle,
        bodyText: this.state.updateBodyText,
        uid: authData.getUid(),
      };
      postingData.editPostingData(postPathId, editPost)
        .then(() => this.props.history.push('/posts/all'))
        .catch((err) => console.error('error from update post', err));
    };

    render() {
      const {
        updateFeedbackType,
        updateGoal,
        updateTitle,
        updateBodyText,
      } = this.state;
      return (
      <div className="Update">
        <h1>Update Your Post</h1>
        <form onSubmit={this.editPostEvent}className="Update col-6 m-auto">
       <div className="form-group">
         <h3><label htmlFor="updateFeedback"></label></h3>
         <textarea
         type="text"
         className="form-control"
         id="updateFeedback"
         placeholder="Update Feedback"
         value={updateFeedbackType}
         onChange={this.editFeedback}
         required
        />
        <div className="form-group">
          <h3><label htmlFor="update-goal"></label></h3>
          <textarea
          type="text"
          className="form-control"
          id="update-goal"
          placeholder="Update Goal"
          value={updateGoal}
          onChange={this.editGoal}
          required
          />
          <div className="form-group">
          <h3><label htmlFor="update-title"></label></h3>
          <input
          type="text"
          className="form-control"
          id="update-title"
          placeholder="Update Title"
          value={updateTitle}
          onChange={this.editTitle}
          required
          />
          <div className="form-group">
            <h3><label htmlFor="update-body"></label></h3>
            <textarea
            type="text"
            className="form-control"
            id="update-body"
            placeholder="Update Text"
            value={updateBodyText}
            onChange={this.editBodyText}
            required
            />
          </div>
          <button type="submit" className="btn btn-success">Update</button>
        </div>
        </div>
       </div>
      </form>
      </div>
      );
    }
}

export default Update;
