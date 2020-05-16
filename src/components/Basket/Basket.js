import React from 'react';

import Mushroom from '../Mushroom/Mushroom';

class Basket extends React.Component {
  render() {
    const { basketItems } = this.props;
    return (
      <div>
        <h3 className="mt-5 mb-3">BASKET</h3>
        <div className="d-flex flex-wrap mr-5 ml-5">
          <Mushroom key={basketItems.id} mushroom={basketItems}/>
        </div>
      </div>
    );
  }
}

export default Basket;
