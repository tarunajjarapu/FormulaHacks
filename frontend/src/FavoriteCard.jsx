import React from 'react';
import { Card } from 'react-bootstrap';

const FavoriteCard = ({ food }) => {
    let ingredients = [];
    if (Array.isArray(food.ingredients)) {
        ingredients = food.ingredients;
    } else if (typeof food.ingredients === 'string') {
        ingredients = food.ingredients.split(',').map(ingredient => ingredient.trim());
    }

    return (
        <div className="favorite-card" style={{ height: '300px', width: '18rem' }}>
            <Card style={{ height: '100%' }}>
                <Card.Body style={{ height: '100%' }}>
                    <Card.Title style={{ textAlign: "center" }}><strong>{food.name}</strong></Card.Title>
                    <Card.Text>
                        <h6>Ingredients:</h6>
                        <ul>
                            {ingredients.map((ingredient, index) => (
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
