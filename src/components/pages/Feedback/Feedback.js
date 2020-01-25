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
    postPathId: '',
  }

  // this function places comments on the page
  getCommentDataComponent = (postId) => {
    commentData.getCommentsByPostingIdData(postId)
      .then((comments) => this.setState({ comments }))
      .catch((err) => console.error('error in get comments', err));
  }

  // ensures that when page loads, the above function fires and displays the singles post along with comment
  componentDidMount() {
    const { postPathId } = this.props.match.params;
    postingData.getSinglePostData(postPathId)
      .then((response) => {
        this.setState({ post: response.data });
        this.getCommentDataComponent(postPathId);
      })
      .catch((err) => console.error('error in get single board', err));
  }

  // delete comments
  deleteCommentComponent = (commentId) => {
    const { postPathId } = this.props.match.params;
    commentData.deleteCommentData(commentId)
      .then(() => this.getCommentDataComponent(postPathId))
      .catch((err) => console.error('error from deleting comments', err));
  }

  // tells the created comment what to do
  createComment = (e) => {
    e.preventDefault();
    this.setState({ newContent: e.target.value });
  }

  // saves a new comment
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

  // WIP
  editCommentEvent = (e) => {
    e.preventDefault();
    const { postPathId } = this.props.match.params;
    const updateComment = {
      postId: postPathId,
      content: this.state.newContent,
      uid: authData.getUid(),
    };
    commentData.editCommentData(postPathId, updateComment)
      .then(() => this.getCommentDataComponent(postPathId))
      .then(() => this.setState({ newContent: '' }))
      .catch((err) => console.error('error from update comment', err));
  }

  editCommentFunctionInShared = (e) => {
    const commentId = e;
    console.log(commentId);
    commentData.getSingleCommentData(commentId)
      .then((request) => {
        const comment = request.data;
        this.setState({ newContent: comment.content });
      })
      .catch((err) => console.error('error with get single comment', err));
  }

  render() {
    const { post, newContent } = this.state;
    const { postPathId } = this.props.match.params;

    return (
      <div className="Feedback">
        <h1>Feedback</h1>
        <h2>{post.feedbackType}</h2>
        <div className="comments col">
          { this.state.comments.map((comment) => <Comments key={comment.id} comment={comment} deleteCommentComponent={this.deleteCommentComponent} editCommentFunctionInShared={this.editCommentFunctionInShared}/>)}
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
            { postPathId
              ? <button className="btn btn-success" onClick={this.editCommentEvent}>Update</button>
              : <button className="btn btn-success" onClick={this.saveCommentEvent}>Comment</button>
            }
          </form>
        </div>
      </div>
    );
  }
}

export default Feedback;
