import './App.css';
import { Component } from 'react';
import Image from './Image';

class App extends Component {
  render() {
    const URL = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
    return (
      <main>
        <Image source={URL} alternativeText='Cute cat staring' />
      </main>
    );
  }
}

export default App;
