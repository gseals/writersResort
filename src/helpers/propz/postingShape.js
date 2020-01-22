import PropTypes from 'prop-types';

const postingShape = PropTypes.shape({
  feedbackType: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { postingShape };
