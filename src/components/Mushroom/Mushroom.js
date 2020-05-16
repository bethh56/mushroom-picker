import React from 'react';

class Mushroom extends React.Component {
  render() {
    const { mushroom } = this.props;
    return (
      <div className="col-6">
      <div className="card">
        <img className="card-img-top" src={mushroom.imgUrl} alt="Mushroom Card"/>
        <div className="card-body">
          <p className="card-text">{mushroom.name}</p>
        </div>
      </div>
      </div>
    );
  }
}

export default Mushroom;
