import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/meals/makeMeals')
      .then(response => response.json())
      .then(data => {
        // Create a map to store unique meals
        const uniqueMealsMap = new Map();
  
        // Iterate over the data and add meals to the map
        // This will automatically remove duplicates based on the meal name
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
  
        // Convert the map values to an array
        const uniqueMeals = Array.from(uniqueMealsMap.values());
  
        setFoods(uniqueMeals);
  
        // Display a toast with the response
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
        toast.error(`Error fetching data: ${error.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }, []);
  

  return (
    <div className="food-list">
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
