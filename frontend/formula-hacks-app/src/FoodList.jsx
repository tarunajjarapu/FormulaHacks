import React from 'react';
import FoodCard from './FoodCard'; // assuming FoodCard component is in the same directory

const FoodList = () => {
  const foods = [
    {
      id: 1,
      name: 'Pizza',
    //   image: 'pizza.jpg',
      ingredients: ['Dough', 'Tomato Sauce', 'Cheese', 'Pepperoni']
    },
    {
      id: 2,
      name: 'Burger',
    //   image: 'burger.jpg',
      ingredients: ['Bun', 'Beef Patty', 'Lettuce', 'Tomato', 'Onion']
    },
    // Add more food objects as needed
  ];

  return (
    <div className="food-list">
      {foods.map(food => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
};

export default FoodList;
