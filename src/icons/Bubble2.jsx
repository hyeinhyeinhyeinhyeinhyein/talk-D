import React, { useEffect } from 'react';

const Bubble2 = ({color}) => {

    useEffect(() => {
        console.log(color);
      }, [color]);

    return(
        <svg width="50" height="50" fill={color} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <path
         d="M24.9998 6.25C36.4582 6.25 45.8332 13.7083 45.8332 22.9167C45.8332 32.125 36.4582 39.5833 24.9998 39.5833C22.4165 39.5833 19.9373 39.2083 17.6457 38.5417C11.5623 43.75 4.1665 43.75 4.1665 43.75C9.02067 38.8958 9.7915 35.625 9.89567 34.375C6.354 31.3958 4.1665 27.3542 4.1665 22.9167C4.1665 13.7083 13.5415 6.25 24.9998 6.25Z"  />
        </svg>
  
);
}

export default Bubble2;