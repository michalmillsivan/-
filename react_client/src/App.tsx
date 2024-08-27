import { useState } from 'react'
import './App.css'
import { Deposites } from './components/pages/deposites'
import { Root } from './components/pages/root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const routes = [
  {
    path: "deposites",
    lable: "Deposites",
    visible: true,
    element: < Deposites />
  }
]

const router = createBrowserRouter([
  {
      path: "/",
      element: <Root />,
      children: routes,
  },
]);

function App() {
  return (
    <>
      
      <RouterProvider router={router} />
    </>
  )
}

export default App
