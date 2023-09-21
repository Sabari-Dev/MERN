import logo from "./logo.svg";
import "./App.css";
import Users from "./Components/UsersComponents/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleUser from "./Components/UsersComponents/SingleUser";
import Resizer from "react-image-file-resizer";
import React, { useState } from "react";

function App() {
  const [compressedImage, setCompressedImage] = useState(null);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    // Define the target file size (e.g., 150 KB)
    const targetFileSizeKB = 150;

    // Use react-image-file-resizer to resize and compress the image
    Resizer.imageFileResizer(
      file,
      targetFileSizeKB, // Target file size in KB
      300, // Max width
      300, // Max height
      "JPEG", // Output format (you can change this to JPEG, PNG, etc.)
      100, // Image quality (0-100)
      0, // Rotation (0 degrees by default)
      (uri) => {
        // uri is the compressed image as a data URI
        console.log(uri);
        setCompressedImage(uri);
      },
      "base64" // Output type ('base64', 'blob', or 'file')
    );
  };

  return (
    <div>
      <h1>Image Uploader</h1>
      <input type="file" accept="image/*" onChange={handleFileUpload} />
      {compressedImage && (
        <div>
          <h2>Compressed Image</h2>
          <img src={compressedImage} alt="Compressed" />
        </div>
      )}
    </div>
  );
}

export default App;
