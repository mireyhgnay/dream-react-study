import React from 'react';
import Person from './Person';

export default function Profile({ image, name, title, isNew }) {
  return (
    <div className='profile'>
      <Person image={image} isNew={isNew} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}

