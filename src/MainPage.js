import React, { useState } from 'react';

function MainPage() {
  const [file, setFile] = useState(null);
  const [convertedFile, setConvertedFile] = useState(null);
  const [loading, setLoading] = useState(false);

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
