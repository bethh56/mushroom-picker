import React from 'react';

import Mushroom from '../Mushroom/Mushroom';

class Basket extends React.Component {
  render() {
    const { basketItems } = this.props;
    const makeBasket = basketItems.map((item) => (
      <Mushroom key={item.id} mushroom={item}/>
    ));
    return (
      <div>
        <h3>BASKET</h3>
        <div className="d-flex flex-wrap mr-5 ml-5">
          {makeBasket}
        </div>
      </div>
    );
  }
}

export default Basket;
