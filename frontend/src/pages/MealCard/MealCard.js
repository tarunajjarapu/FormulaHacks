import React, { useState } from 'react';
import filledStar from '../../assets/star-filled.png';
import emptyStar from '../../assets/star-outline.png';
import check from '../../assets/check-card.png';
import remove from '../../assets/remove-card.png';

import './MealCard.css';

const MealCard = ({ meal, isProfile }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="meal-card">
      <div className="meal-image-container">
        <img src={meal.image} alt={meal.name} className="meal-image" />
        {!isProfile && (
          <div className="star-icon" onClick={handleFavoriteClick}>
            <img src={isFavorite ? filledStar : emptyStar} alt="Favorite" />
          </div>
        )}
      </div>
      <div className="meal-info">
        <div className="meal-name">{meal.name}</div>
        <div className="meal-tagline">{meal.calories} cals | {meal.cookTime} mins</div>
        <div className="meal-ingredients">
          <ul>
            {Object.entries(meal.ingredients).map(([ingredient, quantity], index) => (
              <li key={index}>{ingredient}: {quantity}</li>
            ))}
          </ul>
        </div>
      </div>
      {!isProfile && (
        <div className="meal-buttons">
          <button className="reject-button">
            <img src={remove} alt="Remove" />
          </button>
          <button className="accept-button">
            <img src={check} alt="Check" />
          </button>
        </div>
      )}
    </div>
  );
};

export default MealCard;
