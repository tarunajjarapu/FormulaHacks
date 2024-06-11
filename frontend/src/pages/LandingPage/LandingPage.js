import React from 'react';
import './LandingPage.css';
import receipt from '../../assets/receipt.png'
import tomato from '../../assets/tomato.png'
import check from '../../assets/check.png'
import grocery from '../../assets/grocery.png'
import meal from '../../assets/meal.png'
import profile from '../../assets/profile.png'
import logo from '../../assets/logo.png'


const ingredients = [
  { id: 1, name: 'Tomato', quantity: '2 kg', buyDate: '2024-06-01', expirationDate: '2024-06-10' },
  { id: 2, name: 'Onions', quantity: '1 kg', buyDate: '2024-06-02', expirationDate: '2024-06-12' },
  { id: 3, name: 'Chicken Breast', quantity: '500 g', buyDate: '2024-06-03', expirationDate: '2024-06-08' },
  { id: 4, name: 'Milk', quantity: '1 L', buyDate: '2024-06-05', expirationDate: '2024-06-07' },
  { id: 5, name: 'Eggs', quantity: '12 pcs', buyDate: '2024-06-01', expirationDate: '2024-06-15' },
  { id: 6, name: 'Bread', quantity: '1 loaf', buyDate: '2024-06-02', expirationDate: '2024-06-05' },
  { id: 7, name: 'Cheese', quantity: '200 g', buyDate: '2024-06-04', expirationDate: '2024-06-14' },
  { id: 8, name: 'Carrots', quantity: '1 kg', buyDate: '2024-06-03', expirationDate: '2024-06-10' },
  { id: 9, name: 'Butter', quantity: '250 g', buyDate: '2024-06-01', expirationDate: '2024-06-20' },
  { id: 10, name: 'Potatoes', quantity: '3 kg', buyDate: '2024-06-05', expirationDate: '2024-06-25' },
  { id: 11, name: 'Apples', quantity: '1 kg', buyDate: '2024-06-06', expirationDate: '2024-06-13' },
  { id: 12, name: 'Oranges', quantity: '2 kg', buyDate: '2024-06-07', expirationDate: '2024-06-15' },
  { id: 13, name: 'Bananas', quantity: '6 pcs', buyDate: '2024-06-08', expirationDate: '2024-06-14' },
  { id: 14, name: 'Spinach', quantity: '500 g', buyDate: '2024-06-09', expirationDate: '2024-06-11' },
  { id: 15, name: 'Lettuce', quantity: '1 head', buyDate: '2024-06-10', expirationDate: '2024-06-16' },
  { id: 16, name: 'Salmon Fillet', quantity: '300 g', buyDate: '2024-06-11', expirationDate: '2024-06-13' },
  { id: 17, name: 'Pasta', quantity: '500 g', buyDate: '2024-06-12', expirationDate: '2024-06-18' },
  { id: 18, name: 'Rice', quantity: '1 kg', buyDate: '2024-06-13', expirationDate: '2024-07-01' },
  { id: 19, name: 'Olive Oil', quantity: '500 ml', buyDate: '2024-06-14', expirationDate: '2025-06-14' },
  { id: 20, name: 'Ground Beef', quantity: '1 kg', buyDate: '2024-06-15', expirationDate: '2024-06-19' },
];

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="title-section">
        <div className="title">
          <img src={logo} alt="Logo" />
          <div className="tagline">
            swipe right and take a bite!
          </div>
        </div>
        <div className="profile-section">
          <button className="profile-button">
            <img src={profile} alt="Profile" />
          </button>
        </div>
      </div>
      <div className="information-section">
        <div className="ingredients-section">
          <div className="ingredients-container">
            <h1>Ingredients List</h1>
            <table className="ingredients-table">
              <thead>
                <tr>
                  <th>ITEM</th>
                  <th>QTY</th>
                  <th>BUY DATE</th>
                  <th>EXP DATE</th>
                </tr>
              </thead>
              <tbody>
                {ingredients.map(ingredient => (
                  <tr key={ingredient.id}>
                    <td>{ingredient.name}</td>
                    <td>{ingredient.quantity}</td>
                    <td>{ingredient.buyDate}</td>
                    <td>{ingredient.expirationDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="button-container">
            <button className="square-button">
              <img src={receipt} alt="Upload Receipt" />
              <span>Upload Receipt</span>
            </button>
            <button className="square-button">
              <img src={check} alt="Confirm Receipt" />
              <span>Confirm Receipt</span>
            </button>
            <button className="square-button">
              <img src={tomato} alt="Add Ingredient" />
              <span>Add Ingredient</span>
            </button>
          </div>
        </div>
        <div className='generate-section'>
          <button className="generate-button">
            <img src={meal} alt="Generate Meals" />
            <span>Generate Meals</span>
          </button>
          <button className="generate-button">
            <img src={grocery} alt="Generate Groceries" />
            <span>Generate Groceries</span>
          </button>
        </div>
        <div className="meals-section">
          <div className="meals-container">
            <h1>Current Meals</h1>
            <table className="meals-table">
              <thead>
                <tr>
                  <th>MEAL</th>
                  <th>INGREDIENTS</th>
                  <th>LATEST DATE</th>
                </tr>
              </thead>
              <tbody>
                {/* {ingredients.map(ingredient => (
                  <tr key={ingredient.id}>
                    <td>{ingredient.name}</td>
                    <td>{ingredient.quantity}</td>
                    <td>{ingredient.buyDate}</td>
                    <td>{ingredient.expirationDate}</td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;