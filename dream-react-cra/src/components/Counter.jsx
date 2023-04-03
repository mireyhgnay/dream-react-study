import React, {useState} from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div className='counter'>
      <span className='number'>{count}</span> 
      <button className="add_button" onClick={handleClick}>Add +</button>
    </div>
  );
}

/* 내부상태관리 useState
리액트에서는 UI와 밀접한 관련이 있는 데이터는 State 라는 곳에 보관을 해줘야 한다.

무언가 변경해주고 관리를 해 줄 때 useState 를 사용해준다.

const [상태값, 업데이트 할 수 있는 함수] = useState(초기값);
  - array[0] : 현재 상태값에 접근할 수 있는 변수
  - array[1] : 그 변수를 업데이트 할 수 있는 함수

setCount 가 실행되어 상태가 변경될 때마다 함수가 다시 불러와지면서
return 안에 있는 돔이 계속 불려오고 있지만,
가상돔이 있기 때문에 변경되는 span.number 만 변경되는 것이다!
*/