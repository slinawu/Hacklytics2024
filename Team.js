// Team.js
import React from 'react';
// import { Link } from 'react-router-dom';
import './styles.css';

import teamImage from './team.jpg'; // Import your team image

const Team = () => {
  return (
    <div className="page">
      <img src={teamImage} alt="Team" className="team-image" />
    </div>
  );
}

export default Team;
