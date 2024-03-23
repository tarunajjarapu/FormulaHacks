import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './FoodCard.css';

const FoodCard = ({ food, onCheck, onCross }) => {
  return (
    <div className="food-card" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
      <Card style={{ width: '18rem' }}>
        {food.image && <Card.Img variant="top" src={food.image} style={{ height: '40%' }} />}
        <Card.Body>
          <Card.Title style={{ textAlign: 'center' }}><strong>{food.name}</strong></Card.Title>
          <Card.Text>
            <ul>
              {food.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </Card.Text>
        </Card.Body>
        <div>
          <Button variant="success" className="right-button" onClick={onCheck}>✓</Button>
          <Button variant="danger" className="left-button" onClick={onCross}>✗</Button>
        </div>
      </Card>
    </div>
  );
};

export default FoodCard;