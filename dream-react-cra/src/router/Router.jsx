import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// 라우터 경로를 설명할 수 있는 경로를 각각 배열로 넣어준다.
const router = createBrowserRouter([
  {
    path: "/",
    element: <p>HOME🏠</p>,
    errorElement: <p>Not Found🥹</p>,
  },
  {
    path: "/videos",
    element: <p>VIDEOS🎥</p>,
  },
]);

export default function Router() {
  // 라우터 우산 씌워주기
  return <RouterProvider router={router} />;
}
