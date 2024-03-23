import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import UploadPicture from './UploadPicture';
import { useNavigate } from 'react-router-dom';

class IngredientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        { name: "Flour", quantity: "2 cups", expirationDate: "2024-05-01" },
        { name: "Sugar", quantity: "1 cup", expirationDate: "2024-04-15" },
        { name: "Eggs", quantity: "4", expirationDate: "2024-04-30" },
        // Add more ingredients as needed
      ],
    };

    
  }

  componentDidMount() {
    // Call your API to get initial data
    this.fetchIngredients();
    
    // Set up interval to periodically refresh data
    this.interval = setInterval(this.fetchIngredients, 5000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.interval);
  }

  fetchIngredients = async () => {
    try {
      // Make API call to fetch updated data
      const response = await fetch('http://localhost:8000/meals/getIngredientsList');
      if (!response.ok) {
        throw new Error('Failed to fetch ingredients');
      }
      const data = await response.json();

      
      
      // Check if the data is an array
      if (Array.isArray(data)) {
        // Update state with new data
        this.setState({ ingredients: data });
      } else {
        throw new Error('Invalid data format: Expected an array');
      }
    } catch (error) {
      console.error('Error fetching ingredients:', error);
    }
  }
  

  render() {
    const { ingredients } = this.state;
    const showScroll = ingredients.length > 10;

    return (
      <div className="container" style={{ maxHeight: '500px', overflowY: showScroll ? 'auto' : 'visible', textAlign: 'center', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
        <h2>Ingredients List</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Expiration Date</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ingredient, index) => (
              <tr key={index}>
                <td style={{ textAlign: 'center' }}>{ingredient.name}</td>
                <td style={{ textAlign: 'center' }}>{ingredient.quantity}</td>
                <td style={{ textAlign: 'center' }}>{ingredient.expirationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button variant="primary" onClick={this.props.onAdd}>Add Ingredient</Button>
      </div>
    );
  }
}

const ProfileButton = () => {
  const navigate = useNavigate();
  return (
    <div className="profile-button" style={{ position: 'absolute', top: '10px', right: '10px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
       <Button variant="primary" onClick={() => navigate('/profile')}>Profile</Button>
  </div>
  );
};

const Buttons = () => {
  const navigate = useNavigate();
  const buttonStyle = {
    fontSize: '24px',
    padding: '20px',
    marginBottom: '20px',
    width: '400px',
    height: '80px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
  };

  return (
    <div className="buttons">
        <Button variant="success" block style={buttonStyle} onClick={() => navigate('/food-list')}> 
          Generate Meals
        </Button>
      <div style={{ marginTop: '20px' }}></div>
      <Button variant="info" block style={buttonStyle}>
        Generate Groceries
      </Button>
    </div>
  );
};

const MainPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddIngredient = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <ProfileButton />
      <Container fluid className="d-flex align-items-center justify-content-center vh-100">
        <Row>
          <Col md={6} className="d-flex flex-column align-items-end" style={{ paddingRight: '5%' }}>
            <div style={{ width: '120%', marginRight: '5%' }}>
              <IngredientList onAdd={handleAddIngredient} />
            </div>
          </Col>
          <Col md={6} className="d-flex flex-column align-items-start" style={{ paddingLeft: '5%' }}>
            <Buttons />
            <UploadPicture /> {/* Add UploadPicture component here */}
          </Col>
        </Row>
      </Container>

      {/* Add Ingredient Modal */}
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Ingredient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add your form for adding ingredients here */}
          <Form>
            <Form.Group controlId="ingredientName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group controlId="ingredientQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="text" placeholder="Enter quantity" />
            </Form.Group>
            <Form.Group controlId="ingredientExpirationDate">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddModal}>
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MainPage;