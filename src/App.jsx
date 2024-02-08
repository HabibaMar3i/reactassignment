import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import Portfolio from "./Components/Portfolio/Portfolio";


let routers = createBrowserRouter([
    {
        path:'', element: <Layout/>,children:[
            {path:'', element: <Home/>},
            {path:'about', element: <About/>},
            {path:'contact', element: <Contact/>},
            {path:'portfolio', element: <Portfolio/>},
            {path:'*', element:<NotFound/>}
        ]
    }
])
function App() {
    return <>
        <RouterProvider router={routers}></RouterProvider>
    </>;
}

export default App;
