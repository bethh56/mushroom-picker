import React from 'react';

import Mushroom from '../Mushroom/Mushroom';


class Forest extends React.Component {
  render() {
    const { mushrooms } = this.props;
    const makeMushrooms = mushrooms.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom}/>
    ));

    return (
    <div className="d-flex flex-wrap">
    {makeMushrooms}
    </div>
    );
  }
}

export default Forest;
