import React from 'react';

import { Link } from 'react-router-dom';

import './AllPosts.scss';

class AllPosts extends React.Component {
  render() {
    const postPathId = '12345';
    return (
      <div className="AllPosts">
        <h1>All Posts</h1>
        <h4>These could use your feedback. Press See Full Post to leave a Comment</h4>
        <Link className="btn btn-primary" to={`/posts/${postPathId}/update`}>Edit</Link>
        <Link className="btn btn-primary" to={`/posts/${postPathId}/feedback`}>See Full Post</Link>
      </div>
    );
  }
}

export default AllPosts;
