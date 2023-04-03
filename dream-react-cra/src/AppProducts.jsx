import React, { useState } from 'react';
import "./App.css";
import Products from './components/Products';

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);

  return (
    <div>
      {/* showProducts가 true일 때만 Products를 보여준다 */}
      { showProducts && <Products /> }
      <button onClick={() => 
        setShowProducts((show) => !show)
      }>Toggle Button</button>
    </div>
  );
}

