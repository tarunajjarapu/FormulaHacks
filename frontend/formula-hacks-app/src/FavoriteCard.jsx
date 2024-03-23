import React from 'react';
import { Card } from 'react-bootstrap';

const FavoriteCard = ({ food }) => {
  return (
    <div className="favorite-card" style={{ height: '300px', width: '18rem' }}>
      <Card style={{ height: '100%' }}>
        {food.image && 
          <div style={{ height: '40%' }}>
            <Card.Img variant="top" src={food.image} style={{ height: '100%', objectFit: 'cover' }} />
          </div>
        }
        <Card.Body style={{ height: '60%' }}>
          <Card.Title style={{textAlign: "center"}}><strong>{food.name}</strong></Card.Title>
          <Card.Text>
            <h6>Ingredients:</h6>
            <ul>
              {food.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FavoriteCard;
