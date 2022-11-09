import { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const ComponentePai = (props) => {
      return (
        <div>
          {props.children}
        </div>
      )
    }
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
          <h1>BACANA</h1>
          <span>INCRÍVEL</span>
        </ComponentePai>
      </div>
    )
  }
  
}

export default App;
