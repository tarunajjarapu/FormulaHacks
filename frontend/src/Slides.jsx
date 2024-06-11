import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const UploadPictureButton = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Here you can handle the upload logic, such as sending the file to a server
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // You can perform additional logic such as file validation here
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".jpg, .png"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="upload-file"
      />
      <label htmlFor="upload-file">
        <Button variant="primary" as="span">
          Select Picture
        </Button>
      </label>
      <Button variant="success" onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </Button>
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <img src={URL.createObjectURL(selectedFile)} alt="Selected" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default UploadPictureButton;