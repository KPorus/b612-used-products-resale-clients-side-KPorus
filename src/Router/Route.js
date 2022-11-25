import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ErrorPage from "../component/ErrorPage"
import SamsungProducts from "../Pages/SamsungProducts";
import AppleProducts from "../Pages/AppleProducts";
import Desboard from "../Pages/Desboard";
import WaltonProducts from "../Pages/WaltonProducts.jsx";
import Private from "../Router/Private"

export const route = createBrowserRouter([
    {
        path:"/",
        errorElement:<ErrorPage></ErrorPage>,
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"/login",
                element:<Login></Login>,
            },
            {
                path:"/signUp",
                element:<SignUp></SignUp>,
            },
            {
                path:"/desboard",
                element:<Private><Desboard></Desboard></Private>,
            },
            {
                path:"/samsung/:id",
                element:<SamsungProducts></SamsungProducts>,
                loader:async ({params})=>
                {
                    return fetch(` http://localhost:5000/samsung/${params.id}`)
                }
            },
            {
                path:"/apple/:id",
                element:<AppleProducts></AppleProducts>,
                loader:async ({params})=>
                {
                    return fetch(` http://localhost:5000/apple/${params.id}`)
                }
            },
            {
                path:"/walton/:id",
                element:<WaltonProducts></WaltonProducts>,
                loader:async ({params})=>
                {
                    return fetch(` http://localhost:5000/walton/${params.id}`)
                }
            },
        ]
    }
])