# <div align="center">✏️ React : JSX 문법 정리</div>

<br>

### 🔖 목차

1. [📌 JSX(JavaScript XML) 문법](<#📌-JSX(JavaScript-XML)-문법>)
2. [⚠️ JSX 문법 사용시 유의사항](#⚠️-JSX-문법-사용시-유의사항)
3. [❓ JSX에서 인라인 스타일 작성시 중괄호를 두 번 쓰는 이유는?](#❓-JSX에서-인라인-스타일-작성시-중괄호를-두-번-쓰는-이유는?)
4. [👩‍💻 JSX 좀 더 응용해보기](#👩‍💻-jsx-좀-더-응용해보기)

<br>

## 📌 JSX(JavaScript XML) 문법

“어떻게 ui를 표기해야하는지 JSX를 사용해서 return 해준다.”

<br>

**☝️ 컴포넌트의 필수 요건**

- 대문자로 함수를 만들 것
- JSX를 반환 할 것

<br>
<br>

## ⚠️ JSX 문법 사용시 유의사항

### 1. 컴포넌트는 하나의 태그만 반환해야한다.

다수의 태그를 반환하고 싶다면, 최상위 부모 태그로 하나를 꼭 감싸줘야 한다.

대부분의 경우 div 태그로 감싸주곤 하는데

굳이 최상위 태그에 별도로 스타일을 넣고 할게 아니라면 <> </> 텅텅빈 태그로 감싸줘도 된다.

```jsx
function App() {
  return (
    <>
      <h1>Hello!</h1>
    </>
  );
}
```

<br>

### 2. 클래스를 사용할 때는 className 키워드를 사용해줘야한다.

```jsx
function App() {
  return (
    <>
      <h1 className="orange">Hello!</h1>
    </>
  );
}
```

<br>

### 3. JSX문법 안에서 자바스크립트 코드 사용이 가능하지만, 꼭 중괄호`{}`로 묶어서 사용해줘야한다.

```jsx
function App() {
  const name = "hyerim";
  return (
    <>
      <h1 className="orange">Hello!</h1>
      <h2>{name}</h2>
    </>
  );
}
```

`<h2> name </h2>` 로 작성하면 변수를 가져오지 못하고 그냥 ‘name’ 이라는 문자열로 나타난다.

<br>

이 외에는 html 를 사용하는 것과 다르지않다!

<br>
<br>

## ❓ JSX에서 인라인 스타일 작성시 중괄호를 두 번 쓰는 이유는?

```jsx
function App() {
  return (
    <img
      style={{ width: "200px", height: "200px" }}
      src="./img.png"
      alt="image"
    />
  );
}
```

"style 이라는 값에 자바스크립트 코드를 넣을거야!"

먼저 자바스크립트를 사용하기 위해서 중괄호{ }를 한번 묶어줘야 한다.

자바스크립트 중에서도 오브젝트(객체)의 값을 작성할 것이기 때문에 한번 더 중괄호를 묶어 줘야한다.

이렇게 생각해보자,

width 라는 key에 200px 이라는 문자열 값이 있는 객체

그렇기 때문에 중괄호로 한번 더 묶어 준 것!

<br>
<br>

## 👩‍💻 JSX 좀 더 응용해보기

**템플릿문자열**

```jsx
function App() {
  const name = "hyerim";
  return (
    <>
      <h1 className="orange">{`Hello! {$name}`}</h1>
      <h2>{name}</h2>
    </>
  );
}
```

<br>

**li태그의 반복**

```jsx
function App() {
  return (
    <>
      <ul>
        <li>딸기</li>
        <li>바나나</li>
        <li>사과</li>
      </ul>
    </>
  );
}
```

<br>

자바스크립트 문법을 사용해서 반복되는 코드를 가독성이 좋도록 바꿔준다

```jsx
function App() {
  const list = ["딸기", "바나나", "사과"];
  return (
    <>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}
```
