import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DetailsContainer extends Component {
  static PropTypes = {
    character: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string
    }))
  }

  render() {
    return (
      <div></div>
    );
  }

}
