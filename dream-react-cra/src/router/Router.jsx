import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Videos from "../pages/Videos";
import Home from "../pages/Home";
import Root from "../pages/Root";
import VideoDetail from "../pages/VideoDetail";

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
      // param 추가
      { path: "/videos/:videoId", element: <VideoDetail /> },
    ],
  },
]);

export default function Router() {
  // 라우터 우산 씌워주기
  return <RouterProvider router={router} />;
}
