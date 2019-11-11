import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

const Characters = ({ characters }) => {
  const characterElements = characters.map((character, i) => {
    <li key={character._id || i}>
      <CharacterCard {...character} />
    </li>;
  });

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    photoUrl: PropTypes.string,
    name: PropTypes.string
  }))
};

export default Characters;
