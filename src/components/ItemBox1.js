import React from 'react';
import './App.css';
class ItemBox1 extends React.Component {
  items = [
    {
      name: 'Burger',
      price: 50,
      category: 'Food',
      image: 'https://image.flaticon.com/icons/svg/1046/1046784.svg',
    },
    {
      name: 'Pizza',
      price: 100,
      category: 'Food',
      image: 'https://image.flaticon.com/icons/svg/1046/1046771.svg',
    },
    {
      name: 'Fries',
      price: 25,
      category: 'Food',
      image: 'https://image.flaticon.com/icons/svg/1046/1046786.svg',
    },
    {
      name: 'Coffee',
      price: 35,
      category: 'Drink',
      image: 'https://image.flaticon.com/icons/svg/1046/1046785.svg',
    },
    {
      name: 'Iced Tea',
      price: 45,
      category: 'Drink',
      image: 'https://image.flaticon.com/icons/svg/1046/1046782.svg',
    },
    {
      name: 'Hot Tea',
      price: 45,
      category: 'Drink',
      image: 'https://image.flaticon.com/icons/svg/1046/1046792.svg',
    },
  ];
  render() {
    let clickBtn = () => {
      alert(item.name);
    };
    return (
      <div className="container">
        {items.map(function (item) {
          return (
            <div className="mini-div">
              <div>
                <img src={item.image} alt={item.name} />
              </div>
              <div>
                <strong>{item.name}</strong>
                <p>
                  <small>{item.price}</small>
                </p>
                <p>
                  <button onClick={clickBtn}>Order</button>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
