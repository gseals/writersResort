import React from 'react';

import postingData from '../../../helpers/data/postingData';
import authData from '../../../helpers/data/authData';

import './Update.scss';

class Update extends React.Component {
  state = {
    updateFeedbackType: ' ',
    updateGoal: ' ',
    updateBodyText: ' ',
  }

  componentDidMount() {
    const { postPathId } = this.props.match.params;
    if (postPathId) {
      postingData.getSinglePostData(postPathId)
        .then((request) => {
          const post = request.data;
          this.setState({ updateFeedbackType: post.feedbackType, updateGoal: post.goal, updateBodyText: post.bodyText });
        })
        .catch((err) => console.error('error with get single item', err));
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
        bodyText: this.state.updateBodyText,
        uid: authData.getUid(),
      };
      postingData.editPostingData(postPathId, editPost)
        .then(() => this.props.history.push('/posts/all'))
        .catch((err) => console.error('error from update post', err));
    };

    render() {
      const { updateFeedbackType, updateGoal, updateBodyText } = this.state;
      return (
      <div className="Update">
        <h1>Update Your Post</h1>
        <form className="Update col-6 m-auto">
       <div className="form-group">
         <h3><label htmlFor="updateFeedback"></label></h3>
         <input
         type="textarea"
         className="form-control"
         id="updateFeedback"
         placeholder="Update Feedback"
         value={updateFeedbackType}
         onChange={this.editFeedback}
        />
        <div className="form-group">
          <h3><label htmlFor="update-goal"></label></h3>
          <input
          type="textarea"
          className="form-control"
          id="update-goal"
          placeholder="Update Goal"
          value={updateGoal}
          onChange={this.editGoal}
          />
          <div className="form-group">
            <h3><label htmlFor="update-body"></label></h3>
            <input
            type="textarea"
            className="form-control"
            id="update-body"
            placeholder="Update Item Description"
            value={updateBodyText}
            onChange={this.editBodyText}
            />
          </div>
          <button className="btn btn-success" onClick={this.editPostEvent}>Update</button>
        </div>
       </div>
      </form>
      </div>
      );
    }
}

export default Update;
