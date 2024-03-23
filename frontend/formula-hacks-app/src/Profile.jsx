import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import profilePicture from './assets/profile-picture.png';

const Profile = () => {
    const [selectedRestrictions, setSelectedRestrictions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

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

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center align-items-center">
                <Col xs={12} md={8}>
                    <Card style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                        <Card.Header className="bg-info text-white">User Profile</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={4} className="text-center">
                                    <img src={profilePicture} alt="Profile" className="img-fluid rounded-circle mb-3" />
                                    <h2 className="font-weight-bold">John Doe</h2>
                                </Col>
                                <Col md={8} className="text-center">
                                    <div className="form-group">
                                        <label>DEItary Restrictions</label>
                                        <div className={`select-box ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                                            <Form.Control as="select" multiple onChange={handleSelectChange} value={selectedRestrictions}>
                                                <option value="none" style={{textAlign: 'center'}}>None</option>
                                                <option value="vegetarian" style={{textAlign: 'center'}}>Vegetarian</option>
                                                <option value="vegan" style={{textAlign: 'center'}}>Vegan</option>
                                                <option value="glutenFree" style={{textAlign: 'center'}}>Gluten-Free</option>
                                                <option value="dairyFree" style={{textAlign: 'center'}}>Dairy-Free</option>
                                                <option value="nutFree" style={{textAlign: 'center'}}>Nut-Free</option>
                                            </Form.Control>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center mt-3">
                                    <p>Additional Information or Content Here</p>
                                </Col>
                            </Row>
                            {/* Additional Content to Make the Card Longer */}
                            <Row>
                                <Col>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod, ligula sit amet ultricies dignissim, mauris eros fringilla mi, non vestibulum nulla libero vel purus.</p>
                                    <p>Sed ac sapien velit. Duis nec felis lacus. Nullam auctor elit ut metus elementum tristique.</p>
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