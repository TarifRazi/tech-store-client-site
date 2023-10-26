import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Product = () => {

  const handleAddToCart = event => {
    event.preventDefault();

    // const form = event.target;

    // const Image = form.Image.value;
    // const Name = form.Name.value;
    // const Brand_Name = form.Brand_Name.value;
    // const Type = form.Type.value;
    // const Price = form.Price.value;
    // const Short_description = form.Short_description.value;
    // const Rating = form.Rating.value;

    const cart = { Image, Name, Brand_Name, Type, Price, Short_description, Rating, _id }

    console.log(cart);

    fetch('http://localhost:7000/cart', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(cart),
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Product added to cart successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

  const product = useLoaderData()
  console.log(product)

  const { _id, Image, Name,Short_description, Brand_Name, Type, Rating, Price } = product;


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
            <h2 className="text-2xl font-bold ">{Price}</h2>
            <button onClick={handleAddToCart} className="btn btn-primary mt-9">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;