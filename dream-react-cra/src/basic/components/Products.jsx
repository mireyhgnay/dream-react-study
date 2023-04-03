import React, { useState, useEffect } from 'react';

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false); // 처음엔 체크되어있지 않도록 초기값 설정
  const handleChange = () => setChecked((prev) => !prev); // 이전 값을 반대로 토글링 할 수 있도록 한다

  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`) // 상대경로를 쓰면 바로 public폴더로 접근하게 된다
      .then((res) => res.json()) // 응답을 받은 걸 json 형태로 변환
      .then((data) => {
        // data 를 받아옴
        console.log("🔥 뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      });
    return () => {
      // 데이터가 화면에서 사라질때 호출되는 함수
      console.log("🧹 깨끗하게 청소하는 일들을 합니다.");
    };
  }, [checked]); // checked가 변경될 때마다 수행한다

  return (
    <>
      {/* 체크박스가 체크될 때는 세일 데이트를 가져온다. */}
      <input 
        id="checkbox"
        type="checkbox" 
        value={checked} 
        onChange={handleChange} 
      />
      <label htmlFor="checkbox">Show Only 🔥 Sale</label>
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

