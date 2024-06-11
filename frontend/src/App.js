// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MainPage from './MainPage';
// import Profile from './Profile';
// import FoodList from './FoodList';
// import GroceryList from './groceries';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MainPage />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/food-list" element={<FoodList />} />
//         <Route path="/groceries" element={<GroceryList />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import MealCard from './pages/MealCard/MealCard';
import saladImg from './assets/salad.jpg';
import MealGeneration from './pages/MealGeneration/MealGeneration';

const salad = {
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

function App() {
  return (
    <div className="App">
      <MealGeneration meal={salad} />
    </div>
  );
}

export default App;