import React from 'react';

import Mushroom from '../Mushroom/Mushroom';
import './Basket.scss';

class Basket extends React.Component {
  render() {
    const { basketItems } = this.props;
    const addMushrooms = basketItems.map((mushroom, i) => (
      <Mushroom key={i + 1} mushroom={mushroom}/>
    ));

    return (
      <div>
        <h3>BASKET</h3>
        <div id="pickedMushroomBasket" className="pickedMushroomBasket d-flex flex-wrap justify-content-center">
       {addMushrooms}
        </div>
      </div>
    );
  }
}

export default Basket;
