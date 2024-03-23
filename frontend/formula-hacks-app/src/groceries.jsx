import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';

const GroceryList = () => {
  const [groceries, setGroceries] = useState({});

  useEffect(() => {
    const fetchGroceries = async () => {
      try {
        const response = await fetch('http://localhost:8000/meals/makeGroceries');
        if (!response.ok) {
          throw new Error('Failed to fetch groceries');
        }
        const data = await response.json();
        setGroceries(data);
      } catch (error) {
        console.error('Error fetching groceries:', error);
      }
    };

    fetchGroceries();
  }, []);

  return (
    <Container className="mt-4">
      <h2>Grocery List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groceries).map(([key, value]) => (
            <tr key={key}>
              <td>{value.name}</td>
              <td>{value.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default GroceryList;
