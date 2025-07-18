import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import Profile from "./screens/Profile";
import LoginPage from "./screens/Login";
import ListPost from "./components/Post";
import { use } from "react";
import UserProfile from "./components/UserProfile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/my-profile",
    element: <Profile />,
    children: [
      { index: true, element: <ListPost /> },
      { path: "info", element: <UserProfile /> },
    ],
  },
  {
    path: "/Login",
    element: <LoginPage />,
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);

