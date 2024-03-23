import React, { useState, useEffect } from 'react';
import FoodCard from './FoodCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from 'react-bootstrap';
import './FoodList.css'; // Import CSS file for styling

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMeals();
  }, []); // Fetch meals on initial component mount

  const fetchMeals = (retryCount = 3) => {
    setIsLoading(true);
    fetch('http://localhost:8000/meals/makeMeals')
      .then(response => response.json())
      .then(data => {
        const uniqueMealsMap = new Map();
        data.forEach((item, index) => {
          const mealName = item.Meal['meal name'];
          if (!uniqueMealsMap.has(mealName)) {
            uniqueMealsMap.set(mealName, {
              id: index,
              name: mealName,
              ingredients: item.Meal['ingredients']
            });
          }
        });
        const uniqueMeals = Array.from(uniqueMealsMap.values());
        setFoods(uniqueMeals);
        setCurrentIndex(0); // Reset index to start from the first meal card
        setIsLoading(false);
        toast(`Fetched ${uniqueMeals.length} unique meals from the API`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        if (retryCount > 0) {
          setTimeout(() => fetchMeals(retryCount - 1), 2000);
        } else {
          setIsLoading(false);
          toast.error(`Error fetching data: ${error.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };

  const handleCheck = () => {
    // Handle the logic when the user checks the food
    // For simplicity, let's just move to the next card
    if (currentIndex < foods.length) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleCross = () => {
    // Handle the logic when the user crosses (X) the food
    // For simplicity, let's just move to the next card
    if (currentIndex < foods.length) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <div className="food-list-container">
      <div className="food-list">
        {foods.length > 0 && currentIndex < foods.length ? (
          <FoodCard food={foods[currentIndex]} onCheck={handleCheck} onCross={handleCross} />
        ) : (
          <div className="no-meal-available"></div>
        )}
        {currentIndex >= foods.length && (
          <button className="btn btn-success btn-lg fetch-button" onClick={() => fetchMeals()} disabled={isLoading}>
            {isLoading ? <Spinner as="span" animation="border" size="sm" /> : 'Fetch More Meals'}
          </button>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default FoodList;