import { Component } from 'react';
import Email from './Email';
import Text from './Text';

class Form extends Component {

    state = {
      name: '',
      email: '',
      testes: '',
      textarea: '',
      checkbox: false,
      formularioComErros: true,
    };

    handleError = () => {
      const { name, email, checkbox } = this.state;
  
      const errorCases = [
        !name.length,
        !email.match(/^\S+@\S+$/i),
        !checkbox,
      ];
  
      const formularioPreenchido = errorCases.every((error) => error !== true);
  
      this.setState({
        formularioComErros: !formularioPreenchido,
      });
    }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.handleError);
  }

  render() {
    const { testes, textarea, checkbox, name, email } = this.state;

    return (
      <div>
        <form>
        <Text name={ name } handleChange={this.handleChange} />
        <Email email={ email } handleChange={this.handleChange} />
        <fieldset>
            <textarea
              name="textarea"
              onChange={ this.handleChange }
              value={ textarea }
            />
        </fieldset>
            <input 
              type="checkbox"
              name="checkbox"
              onChange={ this.handleChange }
              value={ checkbox } />
            <select
              name="testes"
              onChange={ this.handleChange }
              value={ testes }
            >
              <option value="test">test</option>
              <option value="test1">test1</option>
              <option value="test2">test2</option>
            </select>
        </form>
      </div>
    );
  }
}

export default Form;