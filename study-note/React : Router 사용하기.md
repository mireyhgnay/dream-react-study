# <div align="center">📁 React : Router 사용하기</div>

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
