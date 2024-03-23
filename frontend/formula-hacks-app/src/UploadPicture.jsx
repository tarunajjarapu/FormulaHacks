import React, { useState } from 'react';
import FoodCard from './FoodCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FoodList.css';
import { Spinner } from 'react-bootstrap';

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadFile = () => {
    if (!selectedFile) {
      toast.error("Please select a file to upload.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    setIsLoading(true);
    fetch('http://localhost:8000/meals/makeMeals', {
      method: 'PUT',
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        setIsLoading(false);
        toast.success("File uploaded successfully.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Handle the response data as needed
      })
      .catch(error => {
        setIsLoading(false);
        toast.error(`Error uploading file: ${error.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="food-list">
      <div className="file-upload">
        <input type="file" onChange={handleFileChange} />
        <button onClick={uploadFile} disabled={isLoading}>
          {isLoading ? <Spinner as="span" animation="border" size="sm" /> : 'Upload File'}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FoodList;
