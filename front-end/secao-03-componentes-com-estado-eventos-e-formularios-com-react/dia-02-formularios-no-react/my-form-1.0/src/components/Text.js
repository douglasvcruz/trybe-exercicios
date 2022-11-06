import { Component } from 'react'
import PropTypes from 'prop-types';

export default class Text extends Component {
  render() {
    const { name, handleChange } = this.props

    return (
      <div>
        <input
          name="name"
          type="text"
          onChange={ handleChange }
          value={ name }
        />
        { !name ? 'Preencha' : ''}
      </div>
    )
  }
}

Text.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
