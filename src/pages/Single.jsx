import { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"
import ProductCard from "./ProductCard"
import { Carousel } from "react-responsive-carousel"

const Single = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const params = new URLSearchParams(new URL(document.URL).search);
            var brandName = params.getAll("id");
            const brandsProducts = await fetch(`http://localhost:7000/products/${brandName}`);
            const jsonData = await brandsProducts.json();
            setData(jsonData);
        };

        getData();
    }, []);

    const products = useLoaderData();

    return (
        <div className="text-center w-full">
            <Carousel showThumbs={false}>
                {data && data.map(product => (
                    <div key={product._id}>
                        <img src={product.Image} alt="" />
                    </div>
                ))}
            </Carousel>

            <div className="p-5 w-full text-center grid grid-cols-1 lg:grid-cols-3 gap-9 justify-center">
                {data && data.map(product => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default Single;
