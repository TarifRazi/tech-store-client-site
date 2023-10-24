import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";


const Home = () => {

    const brand = useLoaderData();

    return (
        <div>

            <Carousel showThumbs={false}>
                {
                    brand.map(item => <div key={item.id}>
                        <img src={item.image} alt="" />
                    </div>)
                }
            </Carousel>

            <div className="flex justify-center mt-5">
                <div className=" grid justify-around text-center md:grid-cols-2 lg:grid-cols-3 gap-9 mt-5">
                    {
                        brand.map(aBrand => <BrandCard
                            key={brand.id}
                            brand={aBrand}
                        ></BrandCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;