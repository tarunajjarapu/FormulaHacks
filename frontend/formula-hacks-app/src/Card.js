import React, { useState } from 'react';
import './Card.css'; // Import CSS file

const FoodCard = ({ food }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    setLiked(true);
    setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(true);
    setLiked(false);
  };

  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />
      <h2>{food.name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {food.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <div className="actions">
        <span onClick={handleLike}>{liked ? '✔' : 'Like'}</span>
        <span onClick={handleDislike}>{disliked ? '✘' : 'Dislike'}</span>
      </div>
    </div>
  );
};

const Card = () => {
  const foodData = [
    {
      name: 'Pizza',
      image: 'pizza.jpg',
      ingredients: ['Dough', 'Tomato Sauce', 'Cheese', 'Toppings']
    },
    {
      name: 'Burger',
      image: 'burger.jpg',
      ingredients: ['Bun', 'Beef Patty', 'Lettuce', 'Tomato', 'Cheese', 'Pickles', 'Ketchup', 'Mustard']
    },
    // Add more food items as needed
  ];

  return (
    <div className="food-tinder">
      {foodData.map((food, index) => (
        <FoodCard key={index} food={food} />
      ))}
    </div>
  );
};

export default Card;
