import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner, Button } from 'react-bootstrap';

const UploadPicture = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadFile = () => {
    if (!selectedFile) {
      toast.error("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    setIsLoading(true); // Set loading state to true
    fetch('http://localhost:8000/meals/parseReceipt', {
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
        setIsLoading(false); // Set loading state to false
        toast.success("File uploaded successfully.");
        // Handle the response data as needed
      })
      .catch(error => {
        setIsLoading(false); // Set loading state to false
        toast.error(`Error uploading file: ${error.message}`);
      });
  };

  const buttonStyle = {
    fontSize: '24px',
    padding: '20px',
    marginBottom: '20px',
    width: '400px',
    height: '80px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    marginTop: '20px',
    backgroundColor: '#96CDFF',
    color: "black"
  };

  return (
    <div className="upload-picture">
      <input type="file" onChange={handleFileChange} style={{ display: 'none' }} id="fileInput" />
      <Button variant="info" block style={buttonStyle} onClick={() => document.getElementById('fileInput').click()}>
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
