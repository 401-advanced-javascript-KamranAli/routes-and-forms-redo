import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({ id, image, name }) => {

  return (
    <div key={id}>
      <img src={image} />
      <p>{name}</p>
    </div>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string
};

export default CharacterCard;
