import React, { useState } from 'react';
import './MainPage.css';

function MainPage() {
  // Initialize state for ingredients
  const [ingredients, setIngredients] = useState([
    { name: "Apple", quantity: "2", expiration: "2024-03-25" },
    { name: "Banana", quantity: "3", expiration: "2024-03-26" },
    { name: "Carrot", quantity: "5", expiration: "2024-03-27" },
    // Add more ingredients as needed
  ]);

  return (
    <div className="app-container">
      <div className="ingredient-list">
        <h2>Ingredient List</h2>
        <div className="scrollable-list">
          {/* Map through your ingredient data and render each item */}
          {ingredients.map((ingredient, index) => (
            <div className="ingredient-item" key={index}>
              <div className="item-name">{ingredient.name}</div>
              <div className="item-quantity">{ingredient.quantity}</div>
              <div className="item-expiration">{ingredient.expiration}</div>
            </div>
          ))}
        </div>
        <div className="button-container">
          <button className="plus-button">+</button>
          <button className="edit-button">Edit</button>
        </div>
      </div>
      <div className="action-buttons">
        <button className="action-button">Past Meals</button>
        <button className="action-button">Favorites</button>
        <button className="action-button">Generate Meals</button>
      </div>
      <div className="profile-button">
        <button>Profile</button>
      </div>
    </div>
  );
}

export default MainPage;
