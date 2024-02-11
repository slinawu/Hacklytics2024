import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

const Demo = () => {
  const [file, setFile] = useState(null);
  const [fileData, setFileData] = useState(null);
  const [error, setError] = useState('');
  const [responseData, setResponseData] = useState('');
  const [buttonText, setButtonText] = useState('No Link');
  const [buttonLink, setButtonLink] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileData(URL.createObjectURL(e.target.files[0]));
    setError('');

    // Set button text to "Open Spotify" and link after 5 seconds
    setTimeout(() => {
      setButtonText('Open Spotify');
      setButtonLink('https://open.spotify.com/track/1BxfuPKGuaTgP7aM0Bbdwr?si=586f68fc81214ab1');
    }, 10000);
  };

  useEffect(() => {
    axios.get('/api/button-status')
      .then(response => {
        const jsonData = response.data;
        setButtonLink(jsonData);
      })
      .catch(error => {
        console.error('Error fetching button status:', error);
      });
  }, []);

  return (
    <div className="page">
      <div className="content-wrapper">
        <h1>Demo</h1>
        <input
          type="file"
          accept=".mp4"
          onChange={handleFileChange}
        />
        {error && <p className="error">{error}</p>}
        {responseData && <p>{responseData}</p>}
        <div className="centered-button-container">
          <button onClick={() => window.open(buttonLink || 'https://open.spotify.com')}>
            {buttonText}
          </button>
        </div>
        {fileData && (
          <video controls className="video-player">
            <source src={fileData} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

export default Demo;