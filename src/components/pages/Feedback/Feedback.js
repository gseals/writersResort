import React from 'react';
import commentData from '../../../helpers/data/commentData';
import postingData from '../../../helpers/data/postingData';
import Comment from '../../shared/Comments/Comments';
import SinglePost from '../../shared/SinglePost/SinglePost';
import './Feedback.scss';

class Feedback extends React.Component {
  state= {
    post: {},
    comments: [],
  }

  getCommentDataComponent = (postId) => {
    commentData.getCommentsByPostingIdData(postId)
      .then((comments) => this.setState({ comments }))
      .catch((err) => console.error('error in get comments', err));
  }

  componentDidMount() {
    const { postId } = this.props.match.params;
    postingData.getSinglePostData(postId)
      .then((response) => {
        this.setState({ post: response.data });
        this.getCommentDataComponent(postId);
      })
      .catch((err) => console.error('error in get single board', err));
  }

  render() {
    const { post } = this.state;
    return (
      <div className="Feedback">
        <h1>Feedback</h1>
        <h2>{post.feedbackType}</h2>
        <div className="comments d-flex flex-wrap">
          { this.state.comments.map((comment) => <Comment key={comment.id} comment={comment}/>)}
        </div>
      </div>
    );
  }
}

export default Feedback;
