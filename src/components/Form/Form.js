import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ name, handleSubmit, handleChange }) => {

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Find a Character" name="name" onChange={handleChange} value={name}>
      </input>
      <button>Find</button>
    </form>
  );

};

Form.propTypes = {
  name: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func
};

export default Form;
