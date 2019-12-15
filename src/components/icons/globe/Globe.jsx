/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const Globe = props => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M7.667 14.655c3.682 0 6.666-3.057 6.666-6.827C14.333 4.057 11.35 1 7.667 1 3.985 1 1 4.057 1 7.828c0 3.77 2.985 6.827 6.667 6.827zM1 7.828h13.333"
      stroke="#B1B1E6"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.667 1a10.584 10.584 0 012.666 6.828c-.051 2.531-.999 4.958-2.666 6.827A10.584 10.584 0 015 7.828C5.051 5.296 6 2.87 7.667 1v0z"
      stroke="#B1B1E6"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Globe;
