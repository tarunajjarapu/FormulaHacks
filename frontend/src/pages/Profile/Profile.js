import React from 'react';
import Select from 'react-select';
import { Chart, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import MealCard from '../MealCard/MealCard';
import profileImg from '../../assets/profile.png';
import saladImg from '../../assets/salad.jpg';
import dollarIcon from '../../assets/coin-outline.png';
import ingredientsIcon from '../../assets/tomato-outline.png';
import receiptsIcon from '../../assets/receipt-outline.png';
import kitchensIcon from '../../assets/refrigerator-outline.png';
import favoriteIcon from '../../assets/star-outline.png';

import './Profile.css';

Chart.register(ArcElement, Tooltip);

const Profile = () => {
    const dietaryOptions = [
        { value: 'vegetarian', label: 'Vegetarian', color: '#4caf50' },
        { value: 'vegan', label: 'Vegan', color: '#ff9800' },
        { value: 'gluten-free', label: 'Gluten-Free', color: '#2196f3' },
        { value: 'nut-allergies', label: 'Nut Allergies', color: '#f44336' },
    ];

    const cuisineOptions = [
        { value: 'italian', label: 'Italian', color: '#e91e63' },
        { value: 'indian', label: 'Indian', color: '#9c27b0' },
        { value: 'chinese', label: 'Chinese', color: '#3f51b5' },
        { value: 'thai', label: 'Thai', color: '#00bcd4' },
        { value: 'french', label: 'French', color: '#8bc34a' },
    ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.data.color,
    }),
    multiValue: (provided, state) => ({
      ...provided,
      backgroundColor: state.data.color,
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      color: 'white',
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      color: 'white',
      ':hover': {
        backgroundColor: state.data.color,
        color: 'black',
      },
    }),
  };

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

  const meals = [salad, salad, salad, salad, salad]; // Add more meals as needed

  const donutData = {
    labels: ['Generated', 'Not Generated'],
    datasets: [
      {
        data: [60, 40], // Example data
        backgroundColor: ['#aaf0aa', '#ffaaaa'],
        hoverBackgroundColor: ['green', 'red'],
      },
    ],
  };

  const donutOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            const dataset = tooltipItem.dataset;
            const index = tooltipItem.dataIndex;
            const label = donutData.labels[index];
            const value = dataset.data[index];
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="profile-screen">
      <div className="profile-top-section">
        <div className="profile-card">
          <img src={profileImg} alt="Profile" className="profile-image" />
          <div className="profile-info">
            <h2 className="profile-name">John Doe</h2>
            <p className="profile-email">john.doe@example.com</p>
          </div>
        </div>
        <div className="profile-card">
          <Doughnut data={donutData} options={donutOptions}/>
          <div className="meals-generated">
            <p><strong>5</strong></p>
            <span>Meals Generated</span>
          </div>
        </div>
        <div className="profile-card">
          <div className="profile-selects">
            <h4>Preferences</h4>
            <Select options={dietaryOptions} isMulti placeholder="Dietary Restrictions" styles={customStyles}/>
            <Select options={cuisineOptions} isMulti placeholder="Preferred Cuisines" styles={customStyles}/>
          </div>
        </div>
        <div className="profile-facts-card">
          <div className="profile-facts-card-inner">
            <div className="profile-fact">
              <img src={dollarIcon} alt="Dollar" className="fact-icon" />
              <p><strong>$50</strong> Saved</p>
            </div>
            <div className="profile-fact">
              <img src={ingredientsIcon} alt="Ingredients" className="fact-icon" />
              <p><strong>7</strong> Ingredients Saved</p>
            </div>
            <div className="profile-fact">
              <img src={receiptsIcon} alt="Receipts" className="fact-icon" />
              <p><strong>3</strong> Receipts Uploaded</p>
            </div>
            <div className="profile-fact">
              <img src={kitchensIcon} alt="Kitchens" className="fact-icon" />
              <p><strong>2</strong> Kitchens Uploaded</p>
            </div>
            <div className="profile-fact">
              <img src={favoriteIcon} alt="Favorites" className="fact-icon" />
              <p><strong>5</strong> Favorite Meals</p>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-bottom-section">
        <h2>Favorites</h2>
        <div className="favorites-scroll">
          {meals.map((meal, index) => (
            <MealCard key={index} meal={meal} isProfile={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
