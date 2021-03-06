import PropTypes from 'prop-types';

const postingShape = PropTypes.shape({
  feedbackType: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  bodyText: PropTypes.string.isRequired,
  displayName: PropTypes.string,
  photoURL: PropTypes.string,
  uid: PropTypes.string.isRequired,
});

export default { postingShape };
