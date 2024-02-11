import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Button = () => {
  const [showButton, setShowButton] = useState(false);
  const [buttonLink, setButtonLink] = useState('');

  useEffect(() => {
    axios.get('/api/button-status')
        .then(response => {
        const shouldShowButton = response.data.buttonStatus; // Adjust property name
        setShowButton(shouldShowButton);
    })
    .catch(error => {
        console.error('Error fetching button status:', error);
    });
    }, []);

  return (
    <div>
      {showButton && (
        <button onClick={() => window.open(buttonLink)}>
          Open Spotify
        </button>
      )}
    </div>
  );
}

export default Button;