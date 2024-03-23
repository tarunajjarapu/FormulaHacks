import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import profilePicture from './assets/profile-picture.png';
import salad from './assets/salad.jpg';
import spaghetti from './assets/spaghetti.jpg';
import smores from './assets/smores.jpg'
import taco from './assets/taco.jpg'
import FavoriteCard from './FavoriteCard';
import './Profile.css';

const Profile = () => {
    // Retrieve stored dietary restrictions from localStorage or initialize as empty array
    const [selectedRestrictions, setSelectedRestrictions] = useState(
        JSON.parse(localStorage.getItem('selectedRestrictions')) || []
    );

    // Retrieve stored favorite cuisines from localStorage or initialize as empty array
    const [selectedCuisines, setSelectedCuisines] = useState(
        JSON.parse(localStorage.getItem('selectedCuisines')) || []
    );

    // Function to handle changes in dietary restrictions dropdown
    const handleSelectChange = (e) => {
        const options = e.target.options;
        const selectedValues = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedValues.push(options[i].value);
            }
        }
        setSelectedRestrictions(selectedValues);
    };

    // Function to handle changes in favorite cuisines dropdown
    const handleCuisinesSelectChange = (e) => {
        const options = e.target.options;
        const selectedValues = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedValues.push(options[i].value);
            }
        }
        setSelectedCuisines(selectedValues);
    };

    // Effect to save selected dietary restrictions to localStorage when it changes
    useEffect(() => {
        localStorage.setItem('selectedRestrictions', JSON.stringify(selectedRestrictions));
    }, [selectedRestrictions]);

    // Effect to save selected favorite cuisines to localStorage when it changes
    useEffect(() => {
        localStorage.setItem('selectedCuisines', JSON.stringify(selectedCuisines));
    }, [selectedCuisines]);

    // Sample food data for FoodCards
    const foodData = [
        { name: "Spaghetti", ingredients: ["Pasta", "Tomato Sauce, Basil"], image: spaghetti },
        { name: "Salad", ingredients: ["Lettuce", "Tomatoes", "Cucumbers"], image: salad },
        { name: "Taco", ingredients: ["Lettuce", "Tomatoes", "Tortilla"], image: taco },
        { name: "S'Mores", ingredients: ["Chocolate", "Crackers", "Marshmallow"], image: smores },
        // Add more food items as needed
    ];

    return (
        <Container className="mt-5">
            <Row className="justify-content-center align-items-center">
                <Col xs={12} md={8}>
                    <Card style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                        <Card.Header className="bg-info text-white" style={{textAlign: 'center', fontWeight:'bold'}}>User Profile</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={4} className="text-center">
                                    <img src={profilePicture} alt="Profile" className="img-fluid rounded-circle mb-3" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} />
                                    <h2 className="font-weight-bold">John Doe</h2>
                                </Col>
                                <Col md={8} className="text-center">
                                    <div className="form-group">
                                        <label style={{fontWeight:'bold'}}>Dietary Restrictions</label>
                                        <div>
                                            <Form.Control as="select" multiple onChange={handleSelectChange} value={selectedRestrictions}>
                                                <option value="vegetarian">Vegetarian</option>
                                                <option value="vegan">Vegan</option>
                                                <option value="glutenFree">Gluten-Free</option>
                                                <option value="dairyFree">Dairy-Free</option>
                                                <option value="nutFree">Nut-Free</option>
                                            </Form.Control>
                                        </div>
                                    </div>
                                    {/* Favorite Cuisines Dropdown */}
                                    <div className="form-group">
                                        <label style={{fontWeight:'bold'}}>Favorite Cuisines</label>
                                        <div>
                                            <Form.Control as="select" multiple onChange={handleCuisinesSelectChange} value={selectedCuisines}>
                                                <option value="italian">Italian</option>
                                                <option value="mexican">Mexican</option>
                                                <option value="japanese">Japanese</option>
                                                <option value="indian">Indian</option>
                                                <option value="nigerian">Nigerian</option>
                                                <option value="slovenian">Slovenian</option>
                                            </Form.Control>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            {/* Food Cards */}
                            <Row className="mt-3">
                                <Col>
                                    <div className="food-cards-container d-flex overflow-x-auto">
                                        {foodData.map((food, index) => (
                                            <div key={index} className="food-card mr-3" style={{ marginRight: '10px'}}> {/* Set a fixed width */}
                                                <FavoriteCard food={food} />
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;