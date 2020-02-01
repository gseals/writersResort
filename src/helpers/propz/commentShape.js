import PropTypes from 'prop-types';

const commentShape = PropTypes.shape({
  postId: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string,
  displayName: PropTypes.string,
  photoURL: PropTypes.string,
  uid: PropTypes.string.isRequired,
});

export default { commentShape };
