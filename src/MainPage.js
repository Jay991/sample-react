import React, { useState } from 'react';
import { convert } from './convert';

import './MainPage.css';

function MainPage() {
  const [file, setFile] = useState(null);
  const [convertedFile, setConvertedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  function convertFile() {
    // Show loading spinner
    setLoading(true);

    // Read file and convert it to desired format using convert function
    const reader = new FileReader();
    reader.onload = () => {
      const input = reader.result;
      const output = convert(input);
      setConvertedFile(output);
      setLoading(false);
    };
    reader.readAsText(file);
  }

  return (
    <div className="main-page">
      <h1>Convert CSV File</h1>
      <div className="file-input">
        <label htmlFor="file">Upload file:</label>
        <input type="file" id="file" onChange={handleFileChange} />
      </div>
      <button onClick={convertFile} disabled={!file}>
        Convert
      </button>
      {loading && <div className="loading-spinner" />}
      {convertedFile && (
        <a
          href={URL.createObjectURL(new Blob([convertedFile]))}
          download="converted.csv"
          className="download-button"
        >
          Download
        </a>
      )}
    </div>
  );
}

export default MainPage;

