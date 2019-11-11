import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Characters from '../components/CharacterCard/Characters';
import { getCharacter } from '../services/apiCall';

export default class ListContainer extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    name: '',
    character: []
  }

  componentDidMount() {
    const name = this.props.match.params;
    getCharacter(name.name)
      .then(character => this.setState({ character }));
  }

  render() {
    const { character } = this.state;
    return (
      <Characters characters={character} />
    );
  }
}
