import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Videos from "../pages/Videos";

// 라우터 경로를 설명할 수 있는 경로를 각각 배열로 넣어준다.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/videos",
    element: <Videos />,
  },
]);

export default function Router() {
  // 라우터 우산 씌워주기
  return <RouterProvider router={router} />;
}
