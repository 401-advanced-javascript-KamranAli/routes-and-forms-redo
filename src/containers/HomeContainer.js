import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form/Form';
import CharacterCard from '../components/CharacterCard/CharacterCard';
import { getRandom } from '../services/apiCall';

export default class HomeContainer extends Component {

  static propTypes = {
    history: PropTypes.object
  };

  state = {
    character: {},
    name: ''
  }

  componentDidMount() {
    getRandom()
      .then((randomToon) => {
        this.setState({
          character: randomToon[0]
        });
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push(`/list/${this.state.name}`);
    
  }
}
