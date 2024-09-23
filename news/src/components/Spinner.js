import React, { Component } from 'react';

const styles = {
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',  // Make the spinner take up most of the viewport
  },
  spinner: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100px', // Increased width to make the spinner larger
  },
  dot: {
    width: '20px', // Increased size of each dot
    height: '20px',
    backgroundColor: '#3498db',
    borderRadius: '50%',
    animation: 'dotWave 1.2s infinite ease-in-out',
  },
  dot1: { animationDelay: '0.1s' },
  dot2: { animationDelay: '0.2s' },
  dot3: { animationDelay: '0.3s' },
  dot4: { animationDelay: '0.4s' },
};

export default class Spinner extends Component {
  render() {
    return (
      <div style={styles.spinnerContainer}>
        <div style={styles.spinner}>
          <div style={{ ...styles.dot, ...styles.dot1 }}></div>
          <div style={{ ...styles.dot, ...styles.dot2 }}></div>
          <div style={{ ...styles.dot, ...styles.dot3 }}></div>
          <div style={{ ...styles.dot, ...styles.dot4 }}></div>
        </div>
        <style>
          {`
            @keyframes dotWave {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-15px); } /* Adjusted the bounce height */
            }
          `}
        </style>
      </div>
    );
  }
}
