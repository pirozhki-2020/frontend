import React from 'react';

import BOTTLE_PARTS from 'config/bottleParts';

import './Block.scss';

const Block = ({ part, children }) => {
  const { image, size } = BOTTLE_PARTS[part];

  return (
    <div className="block" style={{ height: size }}>
      <div
        className="block__bottle"
        style={{ backgroundImage: `url(${image})`, height: size }}
      >
        {children}
      </div>
    </div>
  );
};

export default Block;
