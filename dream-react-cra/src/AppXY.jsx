import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  // 좌표값을 객체로 묶어 하나로 관리하도록 한다.
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  const handleMove = (e) => {
    console.log(e.clientX, e.clientY);

    // 마우스가 움직일 때마다 상태가 변경됨
    // setPosition({ x: e.clientX, y: e.clientY });

    // 만약 수평으로만 이동이 가능하다면?
    // setPosition((prev) => ({ x: e.clientX, y: prev.y, z: prev.z }));
    setPosition((prev) => ({ ...prev, x: e.clientX }));
  }

  return (
    <div className='container' onPointerMove={handleMove}>
      <div className='pointer' style={{ transform: `translate(${position.x}px, ${position.y}px)` }}></div>
    </div>
  );
}

/* useState({ })
  - 좌표가 X,Y 상태값을 각각 설정해주는 것보다 연관된 데이터들을 하나의 객체로 상태를 같이 관리해주는게 좋다.

  setPosition((prev) => ({ ...prev, x: e.clientX }));
  - y,z 값을 prev.y, prev.z 로 길게 작성할 필요없이 ...prev 를 사용하여
  - prev 의 키와 값들을 다 낱개로 풀어서 복사해와서
  - x만 현재 상태값으로 덮어씌우기!
  - 결과적으로, x좌표만 옮겨진다.
*/