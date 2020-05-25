import React from 'react';
import mushroomShape from '../../helpers/propz/mushroomShape';
import './Forest.scss';
import Mushroom from '../Mushroom/Mushroom';


class Forest extends React.Component {
  static propTypes = {
    mushrooms: mushroomShape.mushroomShape,
  }


  render() {
    const { mushrooms } = this.props;
    const makeMushrooms = mushrooms.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom}/>
    ));

    return (
      <div>
        <h3 className="mb-3">FOREST</h3>
        <div className="forest d-flex flex-wrap justify-content-center">
        {makeMushrooms}
        </div>
      </div>
    );
  }
}

export default Forest;
