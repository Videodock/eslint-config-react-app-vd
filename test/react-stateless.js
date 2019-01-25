import React from 'react';

const StatelessComponent = () => {
  const fn = () => {
    // no-op
  };

  return (
    <div>
      <div onClick={fn} />
    </div>
  );
};

export default StatelessComponent;
