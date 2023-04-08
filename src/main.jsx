import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './components/Home/Home'
import About from './components/About/About'
import './index.css'
import Books from './components/Books/Books'
import BookDetails from './components/BookDetails/BookDetails'
import Loading from './components/Loading/Loading'

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
        element:<Books></Books>,
        loader:()=>fetch('https://api.itbook.store/1.0/new')
      },
      {
        path:'book/:id',
        element:<BookDetails></BookDetails>,
        loader:({params})=> fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      },
      {
        path:'loading',
        element:<Loading></Loading>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}></RouterProvider>  
)
