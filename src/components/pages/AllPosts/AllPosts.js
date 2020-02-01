import React from 'react';
import moment from 'moment';
import SinglePost from '../../shared/SinglePost/SinglePost';
import postingData from '../../../helpers/data/postingData';
import './AllPosts.scss';
import commentData from '../../../helpers/data/commentData';
import authData from '../../../helpers/data/authData';

class AllPosts extends React.Component {
  state = {
    posts: [],
  }

  getPostDataComponent = () => {
    postingData.getAllPostsData()
      .then((posts) => this.setState({ posts }))
      .catch((err) => console.error('error in get items'));
  }

  componentDidMount() {
    this.getPostDataComponent();
    console.log('auth', authData.fine());
  }

  deletePostComponent = (postId) => {
    postingData.deletePostsData(postId)
      .then(() => {
        this.getPostDataComponent();
        commentData.getCommentsByPostingIdData(postId).then((comments) => {
          comments.forEach((comment) => commentData.deleteCommentData(comment.id));
        });
      })
      .catch((err) => console.error('error from deleting posts', err));
  }

  render() {
    const { posts } = this.state;
    const { userStuff } = this.props;

    posts.sort((a, b) => {
      const aDate = moment(a.date);
      const bDate = moment(b.date);
      if (aDate.isBefore(bDate)) {
        return 11;
      }
      if (bDate.isBefore(aDate)) {
        return -1;
      }
      return 0;
    });

    return (
      <div className="AllPosts">
        <h1 className="textColor marginTop">All Posts</h1>
        <h4 className="textColor">These could use your feedback. Press See Full Post to leave a Comment</h4>
        <div className="post d-flex flex-wrap">
          { this.state.posts.map((post) => <SinglePost key={post.id} post={post} deletePostComponent={this.deletePostComponent} userStuff={userStuff}/>)}
        </div>
      </div>
    );
  }
}

export default AllPosts;
