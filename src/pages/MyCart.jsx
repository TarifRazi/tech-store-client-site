import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCart = () => {

    const loadedCart = useLoaderData();
    const [cart, setcart] = useState(loadedCart)


    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:7000/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remaining = cart.filter(cart => cart._id !== _id);
                            setcart(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div className='px-6'>

            <h1 className='text-xl font-semibold my-5'>Your total cart Product: {cart.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(cart => <tr key={cart._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{cart.Name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {cart.Brand_Name}
                                </td>
                                <td>{cart.Type}</td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(cart._id)}
                                        className="btn btn-error btn-xs">X</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;