
import Swal from 'sweetalert2'

const AddProducts = () => {

    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const Image = form.Image.value;
        const Name = form.Name.value;
        const Brand_Name = form.Brand_Name.value;
        const Type = form.Type.value;
        const Price = form.Price.value;
        const Short_description = form.Short_description.value;
        const Rating = form.Rating.value;

        const newProduct = { Image, Name, Brand_Name, Type, Price, Short_description, Rating }

        console.log(newProduct);

        fetch('http://localhost:7000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'success!',
                        text: 'Product added successfully',
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
                <div className="hero-content w-3/4 flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleAddProduct} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input name='Image' type="text" placeholder="Photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input name='Name' type="text" placeholder="Product Name" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input name='Brand_Name' type="text" placeholder="Brand Name" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <select name='Type' className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Choose type</option>
                                    <option>Phone</option>
                                    <option>Computer</option>
                                    <option>HeadPhone</option>
                                    <option>Speaker</option>
                                </select>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input name='Price' type="text" placeholder="Price" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Short description</span>
                                </label>
                                <input name='Short_description' type="text" placeholder="Short description" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input name='Rating' type="text" placeholder="Rating" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Products</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;