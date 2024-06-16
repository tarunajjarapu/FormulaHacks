import React from 'react';
import logo from '../../assets/logo.png'
import './Groceries.css';

const Groceries = () => {
  const groceryItems = [
    { item: 'Bread', quantity: '2 loaves' },
    { item: 'Milk', quantity: '1 gallon' },
    { item: 'Eggs', quantity: '1 dozen' }
  ];

  // Prices for each grocery store
  const stores = [
    { name: 'Kroger', prices: [5.00, 3.50, 2.00] },
    { name: 'Walmart', prices: [4.00, 8.00, 3.50] },
    { name: 'Tom Thumb', prices: [6.00, 2.50, 6.00] }
  ];

  return (
    <div className='groceries'>
        <div className="groceries-title">
            <img src={logo} alt="Logo" />
            <div className="groceries-tagline">
                swipe right and take a bite!
            </div>
        </div>
        <div className="groceries-container">
        {stores.map((store, index) => (
            <div className="column" key={index}>
            <div className="grocery-receipt">
                <h1>{store.name}</h1>
                <table className="grocery-table">
                <thead>
                    <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {groceryItems.map((item, idx) => (
                    <tr key={idx}>
                        <td>{item.item}</td>
                        <td>{item.quantity}</td>
                        <td>${store.prices[idx]}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
                <div className="total-price">
                <p>Total: ${store.prices.reduce((acc, curr) => acc + curr, 0).toFixed(2)}</p>
                <button className="email-button">Email Receipt</button>
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Groceries;
