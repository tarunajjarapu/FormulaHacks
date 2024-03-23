import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Profile from './Profile';
import FoodList from './FoodList';
import GroceryList from './groceries';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/food-list" element={<FoodList />} />
        <Route path="/groceries" element={<GroceryList />} />
      </Routes>
    </Router>
  );
}

export default App;