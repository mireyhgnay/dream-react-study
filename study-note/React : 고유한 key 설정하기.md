# <div align="center">👩🏻‍💻 React : 고유한 key 설정하기</div>

<br>

## key 설정하기

- key를 설정해주지 않으면 리액트에서는 콘솔에 에러가 계속 찍혀있을 것이다.

```jsx
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
```

리스트의 자식요소를 만들때는 아무런 key도 전달해주지 않으면 콘솔에 에러가 찍힌다.

리스트에는 key 고유한 값을 가지고 있어야한다.

<br>

**products.json**

```json
[
  {
    "name": "좋은청바지",
    "price": "$50",
    "id": "1"
  },
  {
    "name": "좋은티셔츠",
    "price": "$50",
    "id": "2"
  },
  {
    "name": "부츠",
    "price": "$20",
    "id": "3"
  }
]
```

데이터(백엔드)에 고유한 id값을 추가한다.

<br>

### 이유는?

리액트 내부적으로

- 이건 동일한 아이디니 변경안해줘도 되겠네?
- 배열에서 위치가 변경될 때도 다시 렌더링을 해야하는지?
- 등등.. 파악할 수 있다!
