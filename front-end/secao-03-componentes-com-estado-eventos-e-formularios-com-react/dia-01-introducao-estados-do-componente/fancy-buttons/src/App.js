import { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    numeroDeCliquesOne: 0,
    numeroDeCliquesTwo: 0,
    numeroDeCliquesThree: 0,
  }

  handleClickOne = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesOne: estadoAnterior.numeroDeCliquesOne + 1,
    }));
    console.log(this)
    console.log('Clicou no botão 1!')
  }
  handleClickTwo = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesTwo: estadoAnterior.numeroDeCliquesTwo + 1,
    }));
    console.log(this)
    console.log('Clicou no botão 2!')
  }
  handleClickThree = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesThree: estadoAnterior.numeroDeCliquesThree + 1,
    }));
    console.log(this)
    console.log('Clicou no botão 3!')
  }
  
  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }
  
  render() {
    const { numeroDeCliquesOne, numeroDeCliquesTwo, numeroDeCliquesThree } = this.state;
    return (
      <div>
        <button
        type="button"
        onClick={this.handleClickOne}
        style={{ backgroundColor: this.getButtonColor(numeroDeCliquesOne)}}
        >Meu botão 1 - {numeroDeCliquesOne}
        </button>
        <button
        type="button"
        onClick={this.handleClickTwo}
        style={{ backgroundColor: this.getButtonColor(numeroDeCliquesTwo)}}
        >Meu botão 2 - {numeroDeCliquesTwo}
        </button>
        <button
        type="button"
        onClick={this.handleClickThree}
        style={{ backgroundColor: this.getButtonColor(numeroDeCliquesThree)}}
        >Meu botão 3 - {numeroDeCliquesThree}
        </button>
      </div>
    )
  }
}

export default App;