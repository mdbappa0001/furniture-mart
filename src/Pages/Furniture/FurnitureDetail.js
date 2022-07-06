import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const FurnitureDetail = () => {
    const { furnitureId } = useParams();
    const [furniture, setFurniture] = useState({})
    const { name, img, price, description, quantity, supplierName } = furniture;

    const [furnitureQuantity, setFurnitureQuantity] = useState(quantity)
    const url = `http://localhost:5000/service/${furnitureId}`
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setFurniture(res.data)
            })
    }, [furnitureQuantity, url])



 //  data 
 const handelUpdateStock = e => {
    e.preventDefault();
    const supplierInput = e.target.quantity.value;
    const newQuantityTotal = parseInt(quantity) + parseInt(supplierInput)
    const newQuantity = { newQuantityTotal }
    const putUrl = `http://localhost:5000/update/${furnitureId}`
    fetch(putUrl, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newQuantity)
    }).then(res => res.json())
        .then(data => {
            if (data.acknowledged === true) {
                setFurnitureQuantity(newQuantityTotal);
                // Toast.success("SuccessFully Added")
                e.target.reset()
            }
        })
}

// deliver a book ---------------------------

const deliveredBook = () => {
    const newQuantityTotal = parseInt(quantity) - 1
    const newQuantity = { newQuantityTotal }
    const putUrl = `http://localhost:5000/update/${furnitureId}`
    fetch(putUrl, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newQuantity)
    }).then(res => res.json())
        .then(data => {
            if (data.acknowledged === true) {
                setFurnitureQuantity(newQuantityTotal);
                // Toast.success("Product Delivered !!")
            }
        })
}



    return (
        <>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 lg:mb-6'>
                <div class="card lg:w-9/12  shadow-xl mb-8">
                    <figure class="px-10 pt-10">
                        <img src={img} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p className='font-bold text-primary'>{furnitureId}</p>
                        <h2 class="text-2xl font-bold">{name}</h2>
                        <h2>Price : <span className='font-bold'>{price}</span></h2>
                        <p className='flex space-x-12 '><span>Quantity : <span className='font-bold'>{quantity}</span></span>
                            <span>Supplier : <span className='font-bold'>{supplierName}</span></span></p>
                        <p>{description}</p>
                    </div>
                </div>



                <div>
                    <h2 className='text-center lg:mt-24 text-[#00307E] font-bold text-2xl mb-5'>You can update your book Quantity here</h2>
                    <div className='text-center'>
                        <button onClick={deliveredBook} className='px-5 py-2 border-2 rounded border-[#00307E] hover:bg-[#00307E] hover:text-white duration-200'>Delivered</button>
                        <p className='text-[#F70000]'>*It will decrease your stock by one</p>
                        <form onSubmit={handelUpdateStock} className='my-10'>
                            <h1>Update your Quantity</h1>
                            <input type="number" name="quantity" id="quantity" required /> <br />
                            <input className='px-3 rounded cursor-pointer mt-3 py-2 border-2 border-[#00307E] hover:bg-[#00307E] hover:text-white duration-200' type="submit" value="Update Stock" />
                        </form>
                        <div className='text-center'>
                            <Link to={`/manage-items`} className="inline-flex rounded items-center py-2 px-3 my-10 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Manage Inventory
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FurnitureDetail;