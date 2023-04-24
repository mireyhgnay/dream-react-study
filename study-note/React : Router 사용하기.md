# <div align="center">📁 React : Router 사용하기</div>

<br>

## Routing이란,

새로운 url을 입력하면 그 url에 해당하는 새로운 페이지를 네트워크 서버상에 요청하게되고

서버에서 새로운 html 을 받아와서 페이지 전체가 업데이트 되는 것을 라우팅이라고 한다.

전체를 받아와서 전체를 업데이트한다.

<br>

## 반대로 CSR(client side routing) 이란,

페이지전체가 업데이트 되는 것이아니라 필요한 부분만 업데이트 된다.

새로운 경로를 입력했을 때 서버에게 새로운 네트워크를 요청하는 것이 아니라 어플리케이션에서 업데이트가 필요한 부분만 보여주도록 하는 것이다.

필요한 데이터가 있을 때 그 부분만 네트워크에서 요청해서 json형태의 데이터를 받아온다.

페이지는 그대로 유지하되 필요한 부분만 업데이트한다. (SPA를 유지한다)

<br>
<br>

## 🔥Install

```bash
npm install react-router-dom
```

<br>

```jsx
import { createBrowserRouter } from "react-router-dom";

// 라우터 경로를 설명할 수 있는 경로를 각각 배열로 넣어준다.
const router = createBrowserRouter([]);

export default function Router() {
  // 라우터 우산 씌워주기
  return <RouterProvider router={router} />;
}
```

<br>

## 폴더 기본 구성

- 라우터를 통해 페이지를 만들땐 pages 키워드의 폴더를 생성하여 그 안에 페이지들을 모아둔다.
- 그 페이지들 안에서 사용되는 UI들은 components 폴더 안에 모아둔다.
