import React from 'react';
import hinata from '../images/hinata.jpeg';

export default function Profile() {
  return (
    <div className='profile'>
      <img 
        className='photo' 
        src={hinata}
        alt='hinata'
      />
      <h1>HINATA</h1>
      <p>Animation Character</p>
    </div>
  );
}

