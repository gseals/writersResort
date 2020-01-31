import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import postingShape from '../../../helpers/propz/postingShape';
import authData from '../../../helpers/data/authData';

import './SinglePost.scss';

class SinglePost extends React.Component {
  static propTypes = {
    post: postingShape.postingShape,
    deletePostComponent: PropTypes.func,
  }

  handleDeletePostEvent = (e) => {
    e.preventDefault();
    const { deletePostComponent, post } = this.props;
    deletePostComponent(post.id);
  }

  splitFunction = () => {
    const formattedText = this.props.post.bodyText.split('\n');
    return formattedText;
  }

  render() {
    const { post, userStuff } = this.props;
    const postPathId = this.props.post.id;
    return (
      <div className="SinglePost col-4 mb-3">
        <div id="paper" className="card">
        <div className="pushpin">
          <div className="oval"></div>
          <div className="oval2"></div>
          <div className="cylinder"></div>
          <div className="oval3"></div>
          <div className="oval4"></div>
          <div className="pin"></div>
        </div>
        <div className="pushpin2">
          <div className="oval shadow"></div>
          <div className="oval2 shadow"></div>
          <div className="cylinder shadow"></div>
          <div className="oval3 shadow"></div>
          <div className="oval4 shadow"></div>
          <div className="pin shadow"></div>
        </div>
          <div id="singlePattern" className="card-body">
          <h3 id="content" className="card-title">Feedback Type: {post.feedbackType}</h3>
          <h3 id="content" className="card-title">Goals: {post.goal}</h3>
          <h3 id="content" className="card-title">Title: {post.title}</h3>
          <ol>{post.bodyText && this.splitFunction().slice(0, 3).map((text) => <li key={text} id="content"> {text}</li>)}</ol>
          <div>
          <Link className="btn btn-primary" to={`/posts/${postPathId}/feedback`}>See Full Post</Link>
          {
            (post.uid === authData.getUid()) && <div>
          <button className="btn btn-danger" onClick={this.handleDeletePostEvent}>X</button>
          <Link className="btn btn-primary" to={`/posts/${postPathId}/update`}>Edit</Link>
          </div>
          }
          <p>Post created: {moment(post.date).format('l')}</p>
          <p>Post made by: {post.displayName}</p>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePost;
