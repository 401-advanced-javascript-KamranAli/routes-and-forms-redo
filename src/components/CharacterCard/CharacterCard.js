import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({ _id, photoUrl, name }) => {

  return (
    <div key={_id}>
      <img src={photoUrl} />
      <p>{name}</p>
    </div>
  );
};

CharacterCard.propTypes = {
  _id: PropTypes.string,
  photoUrl: PropTypes.string,
  name: PropTypes.string
};

export default CharacterCard;
