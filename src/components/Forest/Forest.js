import React from 'react';

import Mushroom from '../Mushroom/Mushroom';


class Forest extends React.Component {
  render() {
    const { mushrooms } = this.props;
    const makeMushrooms = mushrooms.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom}/>
    ));

    return (
      <div>
        <h3>FOREST</h3>
        <div className="d-flex flex-wrap">
        {makeMushrooms}
        </div>
      </div>
    );
  }
}

export default Forest;
