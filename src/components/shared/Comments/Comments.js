import React from 'react';
import PropTypes from 'prop-types';
import commentShape from '../../../helpers/propz/commentShape';
import authData from '../../../helpers/data/authData';

import './Comments.scss';

class Comments extends React.Component {
  static propTypes = {
    comment: commentShape.commentShape,
    deleteCommentComponent: PropTypes.func,
    editCommentFunctionInShared: PropTypes.func,
  }

  handleDeleteCommentEvent = (e) => {
    e.preventDefault();
    const { deleteCommentComponent, comment } = this.props;
    deleteCommentComponent(comment.id);
  }

  handleEditFunction = (e) => {
    e.preventDefault();
    const { editCommentFunctionInShared, comment } = this.props;
    editCommentFunctionInShared(comment.id);
  }

  render() {
    const { comment } = this.props;
    return (
      <div className="Comments mb-3">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{comment.content}</h3>
            {
            (comment.uid === authData.getUid()) && <div>
              <button className="btn btn-danger" onClick={this.handleDeleteCommentEvent}>X</button>
              <button className="btn btn-primary"onClick={this.handleEditFunction}>Edit</button>
            </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
