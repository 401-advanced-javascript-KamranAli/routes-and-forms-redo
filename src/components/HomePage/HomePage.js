import React from 'react';
import PropTypes from 'prop-types';

const HomeCard = ({ image }) => {

  return (
    <>
      <img src={image} />
      <form>
        <input type="text" placeholder="Find a Character">
          <button>Search</button>
        </input>
      </form>
    </>
  );

};

HomeCard.propTypes = {
  image: PropTypes.string
};

export default HomeCard;
