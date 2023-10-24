// ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { _id, Image, Name, Brand_Name, Type, Rating, Price} = props.product;
  

  return (
    <div className="flex flex-col justify-between text-center">
      <div className="card card-compact w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img src={Image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Name}</h2>
          <h2 className="text-left text-lg">{Brand_Name}</h2>
          <h2 className="text-left text-lg">{Type}</h2>
          <h2 className="text-left text-lg">{Rating}</h2>
          <h2 className="text-left text-lg font-semibold">{Price}</h2>
          <div className="card-actions justify-end align-bottom">
            <Link to={`/product/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
            {/* Add an onClick event handler to handle the "Update" button */}
            <Link to={`/updateProduct/${_id}`}>
            <button className="btn btn-primary">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
