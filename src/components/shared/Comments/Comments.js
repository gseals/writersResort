import React from 'react';
import commentShape from '../../../helpers/propz/commentShape';

import './Comments.scss';

class Comments extends React.Component {
  static propTypes = {
    comment: commentShape.commentShape,
  }

  render() {
    const { comment } = this.props;
    return (
      <div className="Comments col-4 mb-3">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{comment.content}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
