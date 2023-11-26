import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Vivo from './components/Vivo/Vivo';
import Xiaomi from './Xiaomi/Xiaomi';
import Oppo from './components/Oppo/Oppo';
import Tecno from './components/Tecno/Tecno';
import Infinix from './components/Infinix/Infinix';
import Apple from './components/Apple/Apple';
import OnePlus from './components/OnePlus/OnePlus';
import Symphony from './components/Symphony/Symphony';
import Itel from './components/Itel/Itel';
import OneToTenKSamsung from './components/OneToTenSamsung/OneToTenKSamsung';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/samsung',
        element : <Shop></Shop>
      },
      // samsung package start from here 
      {
        path : '/fifthK',
        element : <OneToTenKSamsung></OneToTenKSamsung>
      },

      {
        path : '/vivo',
        element : <Vivo></Vivo>
      },
      {
        path : '/xiaomi',
        element : <Xiaomi></Xiaomi>
      },
      {
        path : '/oppo',
        element : <Oppo></Oppo>
      },
      {
        path : '/tecno',
        element : <Tecno></Tecno>
      },
      {
        path : '/infinix',
        element : <Infinix></Infinix>
      },
      {
        path : '/apple',
        element : <Apple></Apple>
      },
      {
        path : '/onePlus',
        element : <OnePlus></OnePlus>
      },
      {
        path : '/symphony',
        element : <Symphony></Symphony>
      },
      {
        path : '/itel',
        element : <Itel></Itel>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
