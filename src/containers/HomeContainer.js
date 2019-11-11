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

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleOnClick = () => {
    getRandom()
      .then((randomToon) => {
        this.setState({
          character: randomToon[0]
        });
      });
  }
  render() {
    return (
      <>
        <CharacterCard _id={this.state.character._id} name={this.state.character.name} photoUrl={this.state.character.photoUrl} />
        <button onClick={this.handleOnClick}>Get a random Character</button>
        <Form name={this.state.name} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
      </>
    );
  }
}
