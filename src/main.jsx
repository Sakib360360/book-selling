import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './components/Home/Home'
import About from './components/About/About'
import './index.css'
import Books from './components/Books/Books'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'home',
        element:<Home />
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'books',
        element:<Books></Books>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}></RouterProvider>  
)
