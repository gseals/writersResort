import React from 'react';
import { Link } from 'react-router-dom';
import postingShape from '../../../helpers/propz/postingShape';

import './SinglePost.scss';

class SinglePost extends React.Component {
  static propTypes = {
    post: postingShape.postingShape,
  }

  render() {
    const { post } = this.props;
    const postPathId = this.props.post.id;
    return (
      <div className="SinglePost col-4 mb-3">
        <div className="card">
          <div className="card-body">
          <h3 className="card-title">{post.feedbackType}</h3>
          <Link className="btn btn-primary" to={`/posts/${postPathId}/feedback`}>See Full Post</Link>
          <Link className="btn btn-primary" to={`/posts/${postPathId}/update`}>Edit</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePost;
