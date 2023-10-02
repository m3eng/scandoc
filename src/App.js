import React, { Component } from "react";
import "scandoc-onboarding/dist/css/onboarding.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Websdk from "./components/Websdk";

const router = createBrowserRouter([
  {
    path: "/embedded",
    element: <Websdk /> ,
  },
  {
    path: "/",
    element: <Websdk /> ,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;