import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';

class App extends React.Component {
  state = {
    mushrooms: [],
    basketItems: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    const basketItems = mushroomData.getBasket();
    this.setState({ mushrooms, basketItems });
  }

  pickMushroomEvent = (e) => {
    const mushrooms = mushroomData.getMushrooms();
    const basketItems = mushroomData.getBasket();
    mushroomData.getBasketItems();
    this.setState({ mushrooms, basketItems });
  }

  render() {
    const { mushrooms, basketItems } = this.state;
    return (
      <div className="App">
        <h2>MUSHROOM PICKER</h2>
        <button className="btn btn-danger m-2 px-5" onClick={this.pickMushroomEvent}>PICK MUSHROOM</button>
        <Forest mushrooms={mushrooms}/>
        <Basket basketItems={basketItems}/>
      </div>
    );
  }
}

export default App;
