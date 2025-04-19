import React from 'react';
import './WaveLoader.css';

export const WaveLoader: React.FC = () => (
  <div className="loading-container">
    <div className="wave-line">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default WaveLoader;
