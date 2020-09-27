import React from 'react';

export default function Button({ onClick, value, children }) {
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  );
}
