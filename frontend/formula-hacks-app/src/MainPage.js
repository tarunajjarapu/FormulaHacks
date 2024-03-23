import React from 'react';
import './MainPage.css'; // Import CSS file

const MainPage = () => {
  // Hardcoded grocery list data
  const groceryList = [
    { item: 'Apples', quantity: 5, expirationDate: '03-25-24' },
    { item: 'Milk', quantity: 1, expirationDate: '03-25-24' },
    { item: 'Bread', quantity: 2, expirationDate: '03-25-24' },
    { item: 'Eggs', quantity: 12, expirationDate: '03-25-24' },
    { item: 'Cheese', quantity: 1, expirationDate: '03-25-24' },
    { item: 'Chicken', quantity: 3, expirationDate: '03-25-24' },
    { item: 'Rice', quantity: 1, expirationDate: '03-25-24' },
    // Add more items as needed
  ];

  // Event handler for Generate Meals button
  const handleGenerateMeals = () => {
    // Your logic for generating meals
    console.log('Generate Meals button clicked');
  };

  // Event handler for Generate Grocery Lists button
  const handleGenerateGroceryLists = () => {
    // Your logic for generating grocery lists
    console.log('Generate Grocery Lists button clicked');
  };

  return (
    <div className="container">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Expiration Date</th>
            </tr>
          </thead>
          <tbody>
            {groceryList.map((item, index) => (
              <tr key={index}>
                <td>{item.item}</td>
                <td>{item.quantity}</td>
                <td>{item.expirationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="button-column">
        <button className="rectangular-button" onClick={handleGenerateMeals}>Generate Meals</button>
        <button className="rectangular-button" onClick={handleGenerateGroceryLists}>Generate Grocery Lists</button>
      </div>
    </div>
  );
};

export default MainPage;