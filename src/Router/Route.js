import { createBrowserRouter} from "react-router-dom";
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
import PurchaseOrder from "../Pages/PurchaseOrder";
import AllProduct from "../Pages/AllProduct";
import AllSeller from "../Pages/AllSeller";
import AllBuyers from "../Pages/AllBuyers";
import Blog from "../Pages/Blog";

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
                path:"/blog",
                element:<Blog></Blog>,
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
                path:"/purchaseOrder",
                element:<PrivateRoute><PurchaseOrder></PurchaseOrder></PrivateRoute>,
            },
            {
                path:"/allProduct",
                element:<PrivateRoute><AllProduct></AllProduct></PrivateRoute>,
            },
            {
                path:"/buyer",
                element:<PrivateRoute><AllBuyers></AllBuyers></PrivateRoute>,
            },
            {
                path:"/seller",
                element:<PrivateRoute><AllSeller></AllSeller></PrivateRoute>,
            },
            {
                path:"/samsung/:id",
                element:<SamsungProducts></SamsungProducts>,
                loader:async ({params})=>
                {
                    return fetch(` https://b612-used-products-resale-server-side-kp-orus.vercel.app/samsung/${params.id}`)
                }
            },
            {
                path:"/apple/:id",
                element:<AppleProducts></AppleProducts>,
                loader:async ({params})=>
                {
                    return fetch(` https://b612-used-products-resale-server-side-kp-orus.vercel.app/apple/${params.id}`)
                }
            },
            {
                path:"/walton/:id",
                element:<WaltonProducts></WaltonProducts>,
                loader:async ({params})=>
                {
                    return fetch(` https://b612-used-products-resale-server-side-kp-orus.vercel.app/walton/${params.id}`)
                }
            },
        ]
    }
])