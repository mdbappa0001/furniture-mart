import React from 'react';

const Furniture = ({ furniture }) => {
    const { img, name, description, supplierName,price } = furniture;
    return (
        <>
            

                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img className='w-96 h-full' src={img} alt="Album" /></figure>
                    <div class="card-body w-2/3">
                        <h2 class="font-extrabold text-2xl text-red-700 mb-4">{name}</h2>
                        <h2 className='font-bold'>Price : <span className='text-red-500'>{price}</span></h2>
                        <h2 className='font-bold'>Supplier Name : <small className='text-red-500'>{supplierName}</small></h2>
                        <small className='font-bold'><i>{description}</i></small>
                        <div class="card-actions justify-end">
                            <button className="btn btn-primary mt-2 text-black font-bold uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black hover:from-pink-500 hover:to-yellow-500">See Details</button>
                        </div>
                    </div>
                </div>

           
        </>
    );
};

export default Furniture;