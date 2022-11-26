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
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../Pages/AddProduct";
import YourProduct from "../Pages/YourProduct";
import Orders from "../Pages/Orders";

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
                element:<PrivateRoute><Desboard></Desboard></PrivateRoute>,
            },
            {
                path:"/order",
                element:<PrivateRoute><Orders></Orders></PrivateRoute>,
            },
            {
                path:"/addProduct",
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
            },
            {
                path:"/youProduct",
                element:<PrivateRoute><YourProduct></YourProduct></PrivateRoute>,
            },
            {
                path:"/samsung/:id",
                element:<PrivateRoute><SamsungProducts></SamsungProducts></PrivateRoute>,
                loader:async ({params})=>
                {
                    return fetch(` http://localhost:5000/samsung/${params.id}`)
                }
            },
            {
                path:"/apple/:id",
                element:<PrivateRoute><AppleProducts></AppleProducts></PrivateRoute>,
                loader:async ({params})=>
                {
                    return fetch(` http://localhost:5000/apple/${params.id}`)
                }
            },
            {
                path:"/walton/:id",
                element:<PrivateRoute><WaltonProducts></WaltonProducts></PrivateRoute>,
                loader:async ({params})=>
                {
                    return fetch(` http://localhost:5000/walton/${params.id}`)
                }
            },
        ]
    }
])