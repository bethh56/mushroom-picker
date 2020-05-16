import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';

class App extends React.Component {
  state = {
    mushrooms: [],
    basketItems: [],
    pickedMushroom: {},
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    const basketItems = mushroomData.getBasketItems();
    this.setState({ mushrooms, basketItems });
  }

  pickMushroomEvent = (e) => {
    const { mushrooms } = this.state;
    const randomIndex = Math.floor(Math.random() * mushrooms.length);
    const pickedMushroom = mushrooms[randomIndex];
    this.setState({ pickedMushroom });
  }

  pickAMushroom = (mushroomId) => {
    mushroomData.getBasketItems(mushroomId);
    const mushrooms = mushroomData.getMushrooms;
    this.setState({ mushrooms });
  }

  render() {
    const { mushrooms, pickedMushroom } = this.state;
    return (
      <div className="App">
        <h2>MUSHROOM PICKER</h2>
        <button className="btn btn-danger m-2 px-5" onClick={this.pickMushroomEvent}>PICK MUSHROOM</button>
        <Forest mushrooms={mushrooms}/>
        <Basket basketItems={pickedMushroom}/>
      </div>
    );
  }
}

export default App;
