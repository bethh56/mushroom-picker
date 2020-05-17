import React from 'react';

class Mushroom extends React.Component {
  render() {
    const { mushroom } = this.props;
    return (
      <div className="col-4">
        <div className="card border-warning mb-3">
        <img className="card-img-top" src={mushroom.imgUrl} alt="Mushroom Card"/>
          <p>{mushroom.name}</p>
      </div>
      </div>
    );
  }
}

export default Mushroom;
