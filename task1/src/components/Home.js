
import React, { useState } from 'react';
import './Home.css';
function Home() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      // Get the secure URL from the server
      const { url } = await fetch("http://localhost:5500/s3url").then((res) => res.json());

      console.log(url);

      // Split the URL to remove query parameters
    

      // Use fetch to send the image directly to S3
      const response = await fetch(url, {
        method: "PUT",
        headers:{
          "Content-Type" : "multipart/form-data"
        },
        body: selectedFile, // Set the file as the request body
      });
      const imageUrl = url.split('?')[0];
      console.log(imageUrl);
      // Check if the upload was successful
      if (response.ok) {
        console.log('Image uploaded successfully.');
      } else {
        console.error('Image upload failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='main'>
      <form onSubmit={handleFormSubmit}>
        <input
        className='cf'
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button className='sb' type="submit">Upload</button>
        
      </form>
    </div>
  );
}

export default Home;
