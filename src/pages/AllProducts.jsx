import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const AllProducts = () => {

    const products = useLoaderData();
    console.log(products);

    return (
        <div className=" grid justify-around text-center md:grid-cols-2 lg:grid-cols-3 gap-9 mt-5">
            
            {
                products.map(product => <ProductCard
                    key={product._id}
                    product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default AllProducts;