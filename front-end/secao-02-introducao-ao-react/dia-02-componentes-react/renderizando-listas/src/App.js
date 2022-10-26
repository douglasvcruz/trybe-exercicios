import { Component } from 'react';

class App extends Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item, i) => {
      console.log('item: ', item);
      return (<li key={i}>{item}</li>);
    });

    return (
      <div>
        <h2>Lista de compras</h2>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

export default App;