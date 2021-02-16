import React from 'react';

class ItemBox extends React.Component {
  render() {
    let clickBtn = () => {
      alert(this.props.name);
    };
    return (
      <div className="mini-div">
        <div className="img-div">
          <img src={this.props.image} alt={this.props.name} />
        </div>
        <div className="content-div">
          <strong>{this.props.name}</strong>
          <p>
            <small>Php {this.props.price}</small>
          </p>
          <p>
            <button onClick={clickBtn}>Order</button>
          </p>
        </div>
      </div>
    );
  }
}
export default ItemBox;
