import React from 'react';

import SinglePost from '../../shared/SinglePost/SinglePost';
import postingData from '../../../helpers/data/postingData';
import './AllPosts.scss';

class AllPosts extends React.Component {
  state = {
    posts: [],
  }

  getPostData = () => {
    postingData.getAllPosts()
      .then((posts) => this.setState({ posts }))
      .catch((err) => console.error('error in get items'));
  }

  componentDidMount() {
    this.getPostData();
  }

  render() {
    return (
      <div className="AllPosts">
        <h1>All Posts</h1>
        <h4>These could use your feedback. Press See Full Post to leave a Comment</h4>
        <div className="post d-flex flex-wrap">
          { this.state.posts.map((post) => <SinglePost key={post.id} post={post}/>)}
        </div>
      </div>
    );
  }
}

export default AllPosts;
