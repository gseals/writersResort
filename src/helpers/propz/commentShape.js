import PropTypes from 'prop-types';

const commentShape = PropTypes.shape({
  postId: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  displayName: PropTypes.string,
  uid: PropTypes.string.isRequired,
});

export default { commentShape };
