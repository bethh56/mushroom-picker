import React from 'react';

class Mushroom extends React.Component {
  render() {
    const { mushroom } = this.props;
    return (
      <div className="col-4">
      <div className="card">
        <img className="card-img-top" src={mushroom.imgUrl} alt="Mushroom Card"/>
        <div className="card-body">
          <h3 className="card-text">{mushroom.name}</h3>
        </div>
      </div>
      </div>
    );
  }
}

export default Mushroom;
