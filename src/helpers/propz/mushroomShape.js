import PropTypes from 'prop-types';

const mushroomShape = PropTypes.Shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  isMagic: PropTypes.bool.isRequired,
  isPoisonous: PropTypes.bool.isRequired,
  isDeadly: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,

});


export default { mushroomShape };
