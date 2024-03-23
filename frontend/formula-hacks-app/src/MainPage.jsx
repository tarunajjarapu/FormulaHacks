import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


class IngredientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        { name: "Flour", quantity: "2 cups", expirationDate: "2024-05-01" },
        { name: "Sugar", quantity: "1 cup", expirationDate: "2024-04-15" },
        { name: "Eggs", quantity: "4", expirationDate: "2024-04-30" },
        { name: "Flour", quantity: "2 cups", expirationDate: "2024-05-01" },
        { name: "Sugar", quantity: "1 cup", expirationDate: "2024-04-15" },
        { name: "Eggs", quantity: "4", expirationDate: "2024-04-30" },
        { name: "Flour", quantity: "2 cups", expirationDate: "2024-05-01" },
        { name: "Sugar", quantity: "1 cup", expirationDate: "2024-04-15" },
        { name: "Eggs", quantity: "4", expirationDate: "2024-04-30" },
        { name: "Flour", quantity: "2 cups", expirationDate: "2024-05-01" },
        { name: "Sugar", quantity: "1 cup", expirationDate: "2024-04-15" },
        { name: "Eggs", quantity: "4", expirationDate: "2024-04-30" },
        { name: "Flour", quantity: "2 cups", expirationDate: "2024-05-01" },
        { name: "Sugar", quantity: "1 cup", expirationDate: "2024-04-15" },
        { name: "Eggs", quantity: "4", expirationDate: "2024-04-30" },
        { name: "Flour", quantity: "2 cups", expirationDate: "2024-05-01" },
        { name: "Sugar", quantity: "1 cup", expirationDate: "2024-04-15" },
        { name: "Eggs", quantity: "4", expirationDate: "2024-04-30" },
        { name: "Flour", quantity: "2 cups", expirationDate: "2024-05-01" },
        { name: "Sugar", quantity: "1 cup", expirationDate: "2024-04-15" },
        { name: "Eggs", quantity: "4", expirationDate: "2024-04-30" },
        { name: "Flour", quantity: "2 cups", expirationDate: "2024-05-01" },
        { name: "Sugar", quantity: "1 cup", expirationDate: "2024-04-15" },
        { name: "Eggs", quantity: "4", expirationDate: "2024-04-30" },
        // Add more ingredients as needed
      ],
    };
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
            {ingredients.slice(0, 10).map((ingredient, index) => (
              <tr key={index}>
                <td style={{ textAlign: 'center' }}>{ingredient.name}</td>
                <td style={{ textAlign: 'center' }}>{ingredient.quantity}</td>
                <td style={{ textAlign: 'center' }}>{ingredient.expirationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const ProfileButton = () => {
  // Your profile button component
  return (
    <div className="profile-button" style={{ position: 'absolute', top: '10px', right: '10px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
      {/* Your profile button */}
      <Button variant="primary">Profile</Button>
    </div>
  );
};

const Buttons = () => {
  const buttonStyle = {
    fontSize: '24px', // Adjust the font size to make the buttons larger
    padding: '20px', // Adjust the padding to increase the button size
    marginBottom: '20px', // Adjust the margin at the bottom for spacing
    width: '400px', // Set the width of the buttons
    height: '80px', // Set the height of the buttons
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
  };

  return (
    <div className="buttons">
      <Button variant="success" block style={buttonStyle}>
        Generate Meals
      </Button>
      <div style={{ marginTop: '20px' }}></div> {/* Space between buttons */}
      <Button variant="info" block style={buttonStyle}>
        Generate Groceries
      </Button>
    </div>
  );
};

const MainPage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <ProfileButton />
      <Container fluid className="d-flex align-items-center justify-content-center vh-100">
        <Row>
          <Col md={6} className="d-flex flex-column align-items-end" style={{ paddingRight: '5%' }}>
            <div style={{ width: '150%', marginRight: '5%' }}> {/* Set the width to 40% and adjust the margin */}
              <IngredientList />
            </div>
          </Col>
          <Col md={6} className="d-flex flex-column align-items-start" style={{ paddingLeft: '5%' }}>
            <Buttons />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
