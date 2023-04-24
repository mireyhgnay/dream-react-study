# <div align="center">📁 Outlet 사용하기</div>

<br>

## `<Outlet />` 사용하여 컨테이너 만들기

root 경로 안에서 특정 영역만 변경해줄 때 아울렛을 사용합니다.

ex. Navbar 를 사용하여 container 안에 내용만 변경해주는 경우

**Root.jsx**

```jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <div>
      <Navbar />
      // 하나의 영역을 만들어준 것!
      <Outlet />
    </div>
  );
}
```

<br>

## `<Link />` 사용하여 Navbar 의 경로 설정하기

**Navbar.jsx**

```jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/videos">Videos</Link>
    </nav>
  );
}
```

- to 속성을 사용하여 경로를 설정해준다.
- html 에서 a태그와 비슷~한 역할을 한다.

<br>

**Router.jsx**

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/videos", element: <Videos /> },
    ],
  },
]);
```

- children 속성으로 Root 의 자식 요소로 페이지들을 설정해주어야 한다.
- 기본 경로를 <Home /> 으로 하기 위해서 index 를 true로 설정한다.
