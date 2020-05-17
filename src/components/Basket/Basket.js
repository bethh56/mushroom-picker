import React from 'react';

import Mushroom from '../Mushroom/Mushroom';

class Basket extends React.Component {
  render() {
    const { basketItems } = this.props;
    const addMushrooms = basketItems.map((mushroom, i) => (
      <Mushroom key={i + 1} mushroom={mushroom}/>
    ));

    return (
      <div>
        <h3>BASKET</h3>
        <div id="pickedMushroomBasket" className="d-flex flex-wrap">
       {addMushrooms}
        </div>
      </div>
    );
  }
}

export default Basket;
