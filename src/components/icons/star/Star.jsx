/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const Star = props => (
  <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none" {...props}>
    <path
      d="M9 1l2.472 5.008L17 6.816l-4 3.896.944 5.504L9 13.616l-4.944 2.6L5 10.712 1 6.816l5.528-.808L9 1z"
      stroke="#5152B6"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Star;
