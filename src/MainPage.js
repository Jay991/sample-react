import React, { useState } from 'react';

function MainPage() {
  const [file, setFile] = useState(null);
  const [convertedFile, setConvertedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  function convertFile() {
    // Show loading spinner
    setLoading(true);

    // Read file and convert it to desired format using Perl script
    const reader = new FileReader();
    reader.onload = () => {
      const input = reader.result;
      const output = convertUsingPerlScript(input);
      setConvertedFile(output);
      setLoading(false);
    };
    reader.readAsText(file);
  }

  function convertUsingPerlScript(input) {
    // TODO: Use Perl script to convert input to desired format
  }

  function downloadFile() {
    // Create download link for converted file
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([convertedFile]));
    link.download = 'output.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div>
      <input type="file" onChange={event => setFile(event.target.files[0])} />
      <button onClick={convertFile}>
        {loading ? 'Converting...' : 'Convert'}
      </button>
      <button style={{ display: convertedFile ? 'block' : 'none' }} onClick={downloadFile}>
        File ready for download
      </button>
    </div>
  );
}

export default MainPage;
