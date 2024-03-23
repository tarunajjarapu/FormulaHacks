import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner, Button } from 'react-bootstrap'; // Import Button from react-bootstrap

const UploadPicture = () => {
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

  const buttonStyle = {
    fontSize: '24px',
    padding: '20px',
    marginBottom: '20px',
    width: '400px',
    height: '80px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    marginTop: '20px'
  };

  return (
    <div className="upload-picture">
      <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
      <Button variant="info" block style={buttonStyle} onClick={() => document.querySelector('input[type="file"]').click()}>
        Choose File
      </Button>
      <Button variant="success" block style={buttonStyle} onClick={uploadFile} disabled={isLoading}>
        {isLoading ? <Spinner as="span" animation="border" size="sm" /> : 'Upload Picture'}
      </Button>
      <ToastContainer />
    </div>
  );
};

export default UploadPicture;