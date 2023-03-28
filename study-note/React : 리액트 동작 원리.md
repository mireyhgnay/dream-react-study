# <div align="center">📌 리액트 동작 원리</div>

리액트는 컴포넌트의 집합체이다.

리액트에서 컴포넌트를 정의하는 방식은 함수(함수형 컴포넌트)로 정의하면 된다.

함수에서 반환하는 값은 html 처럼 생긴 JSX(Javascript XML)문법으로 만들면 되고

컴포넌트의 상태 관련 데이터는 useState를 사용하면 되고

외부에서 변경가능한 속성은 props로 전달받으면 된다.

그래서 컴포넌트는 render, state, props 로 구성되어 있다.

```jsx
// 사용하는 곳
<CounterButton name="드림코더" />;

// 컴포넌트 정의
export function CounterButton(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </div>
  );
}
```

<br>

**REACT**

데이터 **`State`**(내부상태), **`Props`**(외부로부터 전달 받은 상태)를 나타내는 **`render`** 가 있다.

상태가 변경될때마다 re-render 된다.

실제로 변경된 부분만 화면에 업데이트 된다. (가상돔의 원리⭐)
