import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {

    const updateProduct = useLoaderData()

    const { Price, _id, Image, Name, Short_description, Brand_Name, Type, Rating } = updateProduct;

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const Image = form.Image.value;
        const Name = form.Name.value;
        const Brand_Name = form.Brand_Name.value;
        const Type = form.Type.value;
        const Price = form.Price.value;
        const Short_description = form.Short_description.value;
        const Rating = form.Rating.value;

        const updatedProduct = { Image, Name, Brand_Name, Type, Price, Short_description, Rating, _id }

        console.log(updatedProduct);

        fetch(`http://localhost:7000/getProduct/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Product Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-3/4 flex-col">
                    <h1 className="text-4xl font-bold font-custom p-5">Update your Product: {Name}</h1>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleUpdateProduct} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input name='Image' type="text" defaultValue={Image} placeholder="Photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input name='Name' type="text" defaultValue={Name} placeholder="Product Name" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input name='Brand_Name' type="text" defaultValue={Brand_Name} placeholder="Brand Name" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <select name='Type' defaultValue={Type} className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Choose type</option>
                                    <option value={Type}>{Type}</option>
                                    <option value="Smartphone">Smartphone</option>
                                    <option value="Laptop">Laptop</option>
                                    <option value="Earbuds">Earbuds</option>
                                    <option value="Tablet">Tablet</option>
                                    <option value="Smartwatch">Smartwatch</option>
                                    <option value="Desktop">Desktop</option>
                                    <option value="Gaming Monitor">Gaming Monitor</option>
                                    <option value="Smart TV">Smart TV</option>
                                    <option value="Mirrorless Camera">Mirrorless Camera</option>
                                    <option value="Headphones">Headphones</option>
                                    <option value="Gaming Console">Gaming Console</option>
                                    <option value="Wireless Earbuds">Wireless Earbuds</option>
                                    <option value="Mini PC">Mini PC</option>
                                    <option value="Solid State Drive">Solid State Drive</option>
                                    <option value="Storage">Storage</option>
                                </select>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input name='Price' type="text" defaultValue={Price} placeholder="Price" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Short description</span>
                                </label>
                                <input name='Short_description' defaultValue={Short_description} type="text" placeholder="Short description" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input name='Rating' type="text" defaultValue={Rating} placeholder="Rating" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update Products</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;