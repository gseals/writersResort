import React from 'react';
import commentData from '../../../helpers/data/commentData';
import postingData from '../../../helpers/data/postingData';
import Comments from '../../shared/Comments/Comments';
import authData from '../../../helpers/data/authData';
import date from '../../../helpers/data/date';
import './Feedback.scss';

class Feedback extends React.Component {
  state= {
    post: {},
    comments: [],
    newContent: '',
    postPathId: '',
    commentId: '',
    editMode: false,
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
      date: date.createDate(),
      displayName: authData.getDisplayName(),
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
    const { commentId } = this.state;
    const updateComment = {
      postId: postPathId,
      content: this.state.newContent,
      date: date.createDate(),
      displayName: authData.getDisplayName(),
      uid: authData.getUid(),
    };
    commentData.getSingleCommentData(commentId)
      .then((request) => {
        if (document.getElementById('new-content').value === request.data.content) {
          alert('Your comment didn\'t change.');
        } else {
          commentData.editCommentData(commentId, updateComment)
            .then(() => this.getCommentDataComponent(postPathId))
            .then(() => this.setState({ newContent: '', editMode: false }));
        }
      })
      .catch((err) => console.error('error with get edit comment', err));
  };

  editCommentFunctionInShared = (e) => {
    const commentId = e;
    commentData.getSingleCommentData(commentId)
      .then((request) => {
        const comment = request.data;
        this.setState({ newContent: comment.content, editMode: true, commentId: e });
      })
      .catch((err) => console.error('error with get single comment', err));
  }

  splitFunction = () => {
    const formattedText = this.state.post.bodyText.split('\n');
    return formattedText;
  }

  render() {
    const {
      post,
      newContent,
      editMode,
    } = this.state;

    return (
      <div className="Feedback">
        <h1 className="textColor">Feedback</h1>
        <div className="row">
        <div id="paper" className="col card scrollInDiv">
        <div id="feedbackPattern">
        <h2 id="content">Feedback: {post.feedbackType}</h2>
        <h2 id="content">Goal: {post.goal}</h2>
        <h2 id="content">Title: {post.title}</h2>
        <ol id="content">{post.bodyText && this.splitFunction().map((text) => <li key={text} >{text}</li>)}</ol>
        </div>
        </div>
        <div className="comments col scrollInDiv">
          <h2 className="textColor">Comments</h2>
          { this.state.comments.map((comment) => <Comments key={comment.id} comment={comment} deleteCommentComponent={this.deleteCommentComponent} editCommentFunctionInShared={this.editCommentFunctionInShared}/>)}
        </div>
        <div className="col">
          <div className="commentMakerBackground">
          <h2>What do you think?</h2>
          <h2>Any Advice?</h2>
        <form onSubmit={editMode ? this.editCommentEvent : this.saveCommentEvent} className="CommentForm">
        <div className="form-group">
          <label htmlFor="new-content"></label>
          <input
          type="textarea"
          className="form-control"
          id="new-content"
          placeholder="Leave a comment"
          value={newContent}
          onChange={this.createComment}
          required
          />
            </div>
              <button type="submit" className="btn btn-success">{editMode ? 'Update' : 'Comment'}</button>
          </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Feedback;
