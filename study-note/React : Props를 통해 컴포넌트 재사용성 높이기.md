# <div align="center">👩🏻‍💻 React : props를 통해 컴포넌트 재사용성 높이기</div>

<br>

```jsx
export default function Profile(props) {
  return (
    <div className="profile">
      <img className="photo" src={props.image} alt="person" />
      <h1>{props.name}}</h1>
      <p>{props.title}</p>
    </div>
  );
}
```

props로만 적어두면 `{props.name}`, `{props.title}` 형식으로 적어줘야하는데

<br>

```jsx
export default function Profile({ image, name, title }) {
  return (
    <div className="profile">
      <img className="photo" src={image} alt="person" />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
```

`{ }` 객체형태로 각 props 의 명칭을 적어주면 좀 더 간단하게 작성할 수 있다.

<br>

### 컴포넌트 재사용에 좋다.

```jsx
function AppProfile() {
  return (
    <>
      <Profile image={hinata} name="Hinata" title="Animation Character" />
      <Profile image={kenma} name="Kenma" title="Animation Character" />
      <Profile image={k} name="K" title="Animation Character" />
    </>
  );
}
```
