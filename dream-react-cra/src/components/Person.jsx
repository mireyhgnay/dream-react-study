import React from 'react';

export default function Person({ image, isNew }) {
  return (
    <div className='person'>
      <img className='photo' src={image} alt='person' />
      { isNew && <span className='new'>NEW</span> }
    </div>
  );
}

