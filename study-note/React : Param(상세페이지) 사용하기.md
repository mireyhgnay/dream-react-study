# <div align="center">📁 React : Param (상세페이지) 사용하기</div>

<br>

## 특정 아이디 사용하여 상세페이지로 이동하기

```jsx
// 라우터 경로를 설명할 수 있는 경로를 각각 배열로 넣어준다.
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
      ////////////// 신규 추가 /////////////////
      // param 추가
      { path: "/videos/:videoId", element: <VideoDetail /> },
      ////////////// 신규 추가 /////////////////
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
```

- `/:` 을 사용해서 특정 id 를 지정해주어 페이지의 상세페이지를 만들어 줄 수 있습니다.
- 하지만 `/:videoId` 작성해주면, '/videos/sdfsd', '/videos/293848' 아무렇게나 적어도 VideoDetail 페이지로 이동합니다.
