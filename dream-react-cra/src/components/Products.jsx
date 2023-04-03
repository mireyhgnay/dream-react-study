import React, { useState, useEffect } from 'react';

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('data/products.json') // 상대경로를 쓰면 바로 public폴더로 접근하게 된다
    .then(res => res.json()) // 응답을 받은 걸 json 형태로 변환
    .then(data => { // data 를 받아옴
      console.log('🔥 뜨끈한 데이터를 네트워크에서 받아옴');
      setProducts(data);
    });
    return () => { // 데이터가 화면에서 사라질때 호출되는 함수
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    }
  }, [])

  return (
    <>
      <ul>
        {products.map(({ id, name, price }) => (
          <li key={id}>
            <article>
              <h3>{name}</h3>
              <p>{price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}

