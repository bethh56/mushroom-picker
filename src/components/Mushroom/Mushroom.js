import React from 'react';
import './Mushroom.scss';

class Mushroom extends React.Component {
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
