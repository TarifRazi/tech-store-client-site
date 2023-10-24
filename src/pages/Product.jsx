import { useLoaderData } from "react-router-dom";


const Product = () => {

  const product = useLoaderData()
  console.log(product)

  const { _id, Image, Name,Short_description, Brand_Name, Type, Rating } = product;


  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row justify-between gap-8">
          <img className="w-1/2 text-left " src={Image} />
          <div className=" w-1/2">
            <h1 className="text-5xl font-bold">{Name}</h1>
            <h2 className="text-xl font-bold">{Brand_Name}</h2>
            <h2 className="text-xl font-bold">{Type}</h2>
            <p className="py-6">{Short_description}</p>
            <h2 className="text-lg ">{Rating}</h2>
            <button className="btn btn-primary mt-9">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;