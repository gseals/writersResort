import React from 'react';
import commentData from '../../../helpers/data/commentData';
import postingData from '../../../helpers/data/postingData';
import Comments from '../../shared/Comments/Comments';
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
    const { postPathId } = this.props.match.params;
    postingData.getSinglePostData(postPathId)
      .then((response) => {
        this.setState({ post: response.data });
        this.getCommentDataComponent(postPathId);
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
          { this.state.comments.map((comment) => <Comments key={comment.id} comment={comment}/>)}
        </div>
      </div>
    );
  }
}

export default Feedback;
