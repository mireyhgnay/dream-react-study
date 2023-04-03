# <div align="center">👩🏻‍💻 React : useEffect 사용하여 데이터 한번만 호출하기</div>

<br>

## Effect 생애 주기

```jsx
export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data/products.json") // 상대경로를 쓰면 바로 public폴더로 접근하게 된다
      .then((res) => res.json()) // 응답을 받은 걸 json 형태로 변환
      .then((data) => {
        // data 를 받아옴
        console.log("🔥 뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      });
  }, []);

  // 생략...
}
```

컴포넌트가 보여질 때 딱 첫번째만 네트워크 통신을 통해서 데이터를 받아오고,

그 후로는 받아오지 못하게 하기 위해 `useEffect` 를 사용한다.

`useEffect` 안에서 네트워크 통신이 이루어지도록 해야한다.

`useEffect` 를 사용하지 않으면 무한루프를 돌면서 데이터를 받아온다.

- 첫번째 인자 : (콜백)함수를 전달한다.
- 두번째 인자 : `[]` 빈 배열로 설정하면, 처음에 보여질 때만 호출되도록 한다.

<br>

## useEffect 안에서 return 함수를 전달하면?

```jsx
export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data/products.json") // 상대경로를 쓰면 바로 public폴더로 접근하게 된다
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
  }, []);

  // 생략...
}
```

메모리나 컴포넌트를 없애거나 무엇가 정리할 때는 `useEffect` 안에서 `return` 함수를 전달해주면 된다.

**해당 코드에서는 데이터가 화면에서 사라질때 호출되는 함수!!**
