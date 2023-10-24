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
                element: <AddProducts></AddProducts>
            },
            {
                path: '/allProducts',
                element: <AllProducts></AllProducts>,
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
                element: <MyCart></MyCart>
            },
            {
                path:'/product/:_id',
                element:<Product></Product>,
                loader: ({ params }) => fetch(`http://localhost:7000/product/${params._id}`)
            },
            {
                path:'/updateProduct/:_id',
                element:<UpdateProduct></UpdateProduct>,
                loader: ({ params }) => fetch(`http://localhost:7000/product/${params._id}`)

            }
        ]
    },
    {
        path: "/products",
        element: <Single />
    }
]);

export default routes;