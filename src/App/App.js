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
        <nav className="navbar navbar-dark bg-dark">
        <h1 className="navbar-brand">MUSHROOM PICKER</h1>
        </nav>
        <button className="btn btn-danger m-3 px-5" onClick={this.pickMushroomEvent}>PICK MUSHROOM</button>
        <div className="row">
        <div className="col-6">
        <Forest mushrooms={mushrooms}/>
        </div>
        <div className="basketDiv col-6">
        <Basket basketItems={basketItems}/>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
