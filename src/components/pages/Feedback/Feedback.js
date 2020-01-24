import React from 'react';
import commentData from '../../../helpers/data/commentData';
import postingData from '../../../helpers/data/postingData';
import Comments from '../../shared/Comments/Comments';
import authData from '../../../helpers/data/authData';
import SinglePost from '../../shared/SinglePost/SinglePost';
import './Feedback.scss';

class Feedback extends React.Component {
  state= {
    post: {},
    comments: [],
    newContent: '',
  }

  getCommentDataComponent = (postId) => {
    commentData.getCommentsByPostingIdData(postId)
      .then((comments) => this.setState({ comments }))
      .catch((err) => console.error('error in get comments', err));
  }

  componentDidMount() {
    const { postPathId } = this.props.match.params;
    postingData.getSinglePostData(postPathId)
      .then((response) => {
        this.setState({ post: response.data });
        this.getCommentDataComponent(postPathId);
      })
      .catch((err) => console.error('error in get single board', err));
  }

  deleteCommentComponent = (commentId) => {
    const { postPathId } = this.props.match.params;
    commentData.deleteCommentData(commentId)
      .then(() => this.getCommentDataComponent(postPathId))
      .catch((err) => console.error('error from deleting comments', err));
  }

  createComment = (e) => {
    e.preventDefault();
    this.setState({ newContent: e.target.value });
  }

  saveCommentEvent = (e) => {
    e.preventDefault();
    const { postPathId } = this.props.match.params;
    const newComment = {
      postId: postPathId,
      content: this.state.newContent,
      uid: authData.getUid(),
    };
    commentData.saveComment(newComment)
      .then(() => this.getCommentDataComponent(postPathId))
      .then(() => this.setState({ newContent: '' }))
      .catch((err) => console.error('error from save comment', err));
  }

  render() {
    const { post, newContent } = this.state;

    return (
      <div className="Feedback">
        <h1>Feedback</h1>
        <h2>{post.feedbackType}</h2>
        <div className="comments col">
          { this.state.comments.map((comment) => <Comments key={comment.id} comment={comment} deleteCommentComponent={this.deleteCommentComponent}/>)}
        </div>
        <div className="col">
        <form className="CommentForm">
        <div className="form-group">
          <label htmlFor="new-content"></label>
          <input
          type="textarea"
          className="form-control"
          id="new-content"
          placeholder="Leave a comment?"
          value={newContent}
          onChange={this.createComment}
          />
            </div>
            <button className="btn btn-success" onClick={this.saveCommentEvent}>Comment</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Feedback;
