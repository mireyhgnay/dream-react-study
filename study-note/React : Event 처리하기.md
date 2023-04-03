# <div align="center">👩🏻‍💻 React : Event 처리하기</div>

<br>

## 태그에 직접 event 생성하기

- 태그에 화살표 함수를 사용해서 바로 넣어도 되고,
- function 을 사용해서 넣어도 된다.

```jsx
<button
  className="button"
  onClick={(event) => {
    console.log(event);
    alert("button click!");
  }}
>
  Button
</button>
```

<br>

## 별도 함수 생성하여 event 전달하기

```jsx
function AppProfile() {
  const handleClick = (event) => {
    console.log(event); // evnet 정보 확인할 수 있다
    alert("button click!");
  };
  return (
    <>
      <button className="button" onClick={handleClick}>
        Button
      </button>
    </>
  );
}
```

<br>

## 여기서 자바스크립트 개념 잡고 가기!!

```jsx
// 변수의 참조값만 전달한 경우
<button className="button" onClick={handleClick}>
  Button
</button>

// 함수를 호출한 경우
<button className="button" onClick={handleClick()}>
  Button
</button>
```

함수의 참조값만 전달하지 않고 함수를 호출해버리면 return이 되는 시점에 `handleClick` 을 호출해서 실행해버린다.

우리가 하고싶은 건 `onClick`을 실행시켰을 때! `handleClick` 함수를 연결하고 싶은 것!

연결하고 싶을 때는 참조값이 아닌 함수 이름만 전달해야한다.

변수의 참조값을 전달만 해주면 click이 발생했을 때 `handleClick` 이 참조하고 있는 함수를 호출한다.

`onSubmit`, `onCancel` 이벤트들은 모두 동일하다.

<br>

**결론**

- handleClick : 버튼을 클릭했을 때 함수가 실행된다.
- handleClick() : return이 되는 시점에 함수가 다 실행되버린다. 이미 버튼 클릭 전에 실행되는 것이다.

<br>

---

<br>

[🔗 리액트 공식 문서 - 이벤트 처리하기](https://ko.reactjs.org/docs/handling-events.html)
