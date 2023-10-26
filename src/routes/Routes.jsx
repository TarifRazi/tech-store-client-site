import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/Home";
import AddProducts from "../pages/AddProducts";
import AllProducts from "../pages/AllProducts";
import Brands from "../../public/AllBrands.json"
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import MyCart from "../pages/MyCart";
import Single from "../pages/Single";
import Product from "../pages/Product";
import UpdateProduct from "../pages/UpdateProduct";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => Brands

            },
            {
                path: '/addProduct',
                element: <PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>
            },
            {
                path: '/allProducts',
                element: <PrivateRoutes><AllProducts></AllProducts></PrivateRoutes>,
                loader: () => fetch('http://localhost:7000/products')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/cart',
                element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
                loader: () => fetch(`http://localhost:7000/cart`)
            },
            {
                path:'/product/:_id',
                element:<PrivateRoutes><Product></Product></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:7000/getProduct/${params._id}`)
            },
            {
                path:'/updateProduct/:_id',
                element:<PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:7000/getProduct/${params._id}`)

            },
            {
                path: "/products",
                element: <PrivateRoutes><Single/></PrivateRoutes>
            }

        ]
    },
    // {
    //     path: "/products",
    //     element: <Single />
    // }
]);

export default routes;