import React, { useState } from 'react';
import FoodCard from './FoodCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from 'react-bootstrap';

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div className="food-list">
      <button className="fetch-button" onClick={() => fetchMeals()} disabled={isLoading}>
        {isLoading ? <Spinner as="span" animation="border" size="sm" /> : 'Fetch Meals'}
      </button>
      {foods.length > 0 ? (
        foods.map(food => (
          <FoodCard key={food.id} food={food} />
        ))
      ) : (
        <div>No meal data available</div>
      )}
      <ToastContainer />
    </div>
  );
};

export default FoodList;
