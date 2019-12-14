/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const Pin = props => (
  <svg width="1em" height="1em" viewBox="0 0 14 18" fill="none" {...props}>
    <path
      d="M13 7.145c0 4.78-6 8.876-6 8.876s-6-4.097-6-8.876A6.22 6.22 0 012.757 2.8 5.93 5.93 0 017 1a5.93 5.93 0 014.243 1.8A6.22 6.22 0 0113 7.145z"
      stroke="#B1B1E6"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 9.193c1.105 0 2-.917 2-2.048s-.895-2.048-2-2.048-2 .917-2 2.048.895 2.048 2 2.048z"
      stroke="#B1B1E6"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Pin;
