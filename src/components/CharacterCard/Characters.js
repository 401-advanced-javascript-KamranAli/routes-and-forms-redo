import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

const Characters = ({ character }) => {
  const characterElements = character.map(characterItem => {
    <li key={characterItem.id}>
      <CharacterCard {...characterItem} />
    </li>;
  });

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

Characters.propTypes = {
  character: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string
  }))
};

export default Characters;
