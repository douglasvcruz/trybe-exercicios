import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Email extends Component {
  render() {
    const { email, handleChange } = this.props
    return (
      <div>
        <input
          name="email"
          type="email"
          onChange={ handleChange }
          value={ email }
        />
        { !email ? 'Preencha' : ''}
      </div>
    )
  }
}

Email.propTypes = {
  email: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
