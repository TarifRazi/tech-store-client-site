import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
    const { name, image } = brand

    return (
        <div className="card w-96 bg-base-100 shadow-xl flex flex-col justify-between">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions">
                    <Link to={`/products?id=${name}`}><button className="btn btn-primary">Buy Now</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default BrandCard;
