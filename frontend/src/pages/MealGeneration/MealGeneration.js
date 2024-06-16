import React, { useState, useEffect } from 'react';
import MealCard from '../MealCard/MealCard'; // Import your MealCard component
import './MealGeneration.css';
import saladImg from '../../assets/salad.jpg';

const MealGeneration = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Set initial position to center of the screen when component mounts
    const mealCard = document.querySelector('.meal-card');
    const centerLeft = (window.innerWidth - mealCard.offsetWidth) / 2;
    const centerTop = (window.innerHeight - mealCard.offsetHeight) / 2;
    console.log("RESET Inner Width: ", window.innerWidth)
    console.log("RESET Inner Height: ", window.innerHeight)
    console.log("RESET OFF Width: ", mealCard.offsetWidth)
    console.log("RESET OFF Height: ", mealCard.offsetHeight)
    console.log("RESET Ledt: ", centerLeft)
    console.log("RESET Top: ", centerTop)
    mealCard.style.left = `${centerLeft}px`;
    mealCard.style.top = `${centerTop}px`;
  }, []);

  const handleDragStart = (event) => {
    setIsDragging(true);
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    resetPosition();
  };

  const handleDrag = (event) => {
    if (isDragging) {
      const deltaX = event.clientX - position.x;
      const deltaY = event.clientY - position.y;

      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const mealCard = document.querySelector('.meal-card');
      mealCard.style.left = `${mealCard.offsetLeft + deltaX}px`;
      mealCard.style.top = `${mealCard.offsetTop + deltaY}px`;

      // Check if the card touches the right edge
      if (mealCard.offsetLeft + mealCard.offsetWidth >= window.innerWidth) {
        document.body.classList.add('flash-green');
      } else {
        document.body.classList.remove('flash-green');
      }

      // Check if the card touches the left edge
      if (mealCard.offsetLeft <= 0) {
        document.body.classList.add('flash-red');
      } else {
        document.body.classList.remove('flash-red');
      }
    }
  };

  const resetPosition = () => {
    const mealCard = document.querySelector('.meal-card');
    const centerLeft = (window.innerWidth - mealCard.offsetWidth) / 2;
    const centerTop = (window.innerHeight - mealCard.offsetHeight) / 2;
    console.log("RESET Inner Width: ", window.innerWidth)
    console.log("RESET Inner Height: ", window.innerHeight)
    console.log("RESET OFF Width: ", mealCard.offsetWidth)
    console.log("RESET OFF Height: ", mealCard.offsetHeight)
    console.log("RESET Ledt: ", centerLeft)
    console.log("RESET Top: ", centerTop)
    mealCard.style.left = `${centerLeft}px`;
    mealCard.style.top = `${centerTop}px`;

    document.body.classList.remove('flash-green', 'flash-red');
  };

  const meal = {
    image: saladImg,
    name: 'Veggie Supreme Salad',
    calories: 150,
    cookTime: 10,
    ingredients: {
      'Lettuce': '2 cups',
      'Tomato': '1 cup',
      'Cucumber': '1 cup',
      'Olive Oil': '2 tbsp',
      'Lemon Juice': '1 tbsp',
      'Salt': 'to taste',
      'Pepper': 'to taste',
    },
  };

  return (
    <div
      className="meal-card-generation"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDrag={handleDrag}
    >
      <MealCard meal={meal} />
    </div>
  );
};

export default MealGeneration;