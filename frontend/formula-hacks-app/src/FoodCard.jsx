import React from 'react';
import { Card, Button } from 'react-bootstrap';

const FoodCard = ({ food }) => {
  return (
    <div className="food-card">
      <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src={food.image} /> */}
        <Card.Body>
          <Card.Title><strong>{food.name}</strong></Card.Title>
          <Card.Text>
            <h6>Ingredients:</h6>
            <ul>
              {food.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </Card.Text>
          <Button variant="success">&#x2713;</Button>{' '}
          <Button variant="danger">&#x2717;</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoodCard;
