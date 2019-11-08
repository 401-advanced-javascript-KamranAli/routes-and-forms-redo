import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ name, handleSubmit, handleChange }) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Find a Character" onChange={handleChange} value={name}>
          <button>Find</button>
        </input>
      </form>
    </>
  );

};

Form.propTypes = {
  name: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func
};

export default Form;
