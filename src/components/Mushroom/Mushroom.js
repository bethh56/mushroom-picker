import React from 'react';
import mushroomShape from '../../helpers/propz/mushroomShape';
import './Mushroom.scss';

class Mushroom extends React.Component {
  static propTypes = {
    mushrooms: mushroomShape.mushroomShape,
  }


  render() {
    const { mushroom } = this.props;
    return (
      <div className="mushroomCard">
        <div className="card mb-3 h-100 mushrooms">
        <img className="card-img-top" src={mushroom.imgUrl} alt="Mushroom Card"/>
          <p>{mushroom.type}</p>
          <footer>
          <p>{mushroom.name}</p>
          </footer>
      </div>
      </div>
    );
  }
}

export default Mushroom;
