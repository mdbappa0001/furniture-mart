import React from 'react';
import CountUp from 'react-countup';
import client from "../../images/icons/clinet.png";
import product from "../../images/icons/product.png";
import review from "../../images/icons/review.png";
import partner from "../../images/icons/partner.png";

const BusinessSummary = () => {
    return (
        <>

            <div className=' bg-gray-600 pt-16'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5'>

                    <div className="card bg-base-200 shadow-xl">
                        <div className="card-body">
                            <div className='flex items-center justify-center'><h2 className="text-center font-bold text-2xl mb-2">Total Product </h2>  <img className='w-8 ml-2' src={product} alt="" /></div>
                            <h2 className='text-center font-bold text-5xl mb-2'><CountUp end={50} duration={4} />k</h2>
                            <p className='text-center'>In The Inventory</p>
                        </div>
                    </div>
                    <div className="card bg-base-200 shadow-xl">
                        <div className="card-body">
                            <div className='flex items-center justify-center'><h2 className="text-center font-bold text-2xl mb-2">Happy Client </h2>  <img className='w-8 ml-2' src={client} alt="" /></div>
                            <h2 className='text-center font-bold text-5xl mb-2'><CountUp end={120} duration={4} />k</h2>
                            <p className='text-center'>All Over The World</p>
                        </div>
                    </div>
                    <div className="card bg-base-200 shadow-xl">
                        <div className="card-body">
                            <div className='flex items-center justify-center'><h2 className="text-center font-bold text-2xl mb-2">Our Partner </h2>  <img className='w-8 ml-2' src={partner} alt="" /></div>
                            <h2 className='text-center font-bold text-5xl mb-2'><CountUp end={60} duration={4} />k</h2>
                            <p className='text-center'>Work With Us</p>
                        </div>
                    </div>
                    <div className="card bg-base-200 shadow-xl">
                        <div className="card-body">
                            <div className='flex items-center justify-center'><h2 className="text-center font-bold text-2xl mb-2">Reviews </h2>  <img className='w-6 ml-2' src={review} alt="" /></div>
                            <h2 className='text-center font-bold text-5xl mb-2'><CountUp end={8} duration={4} />k</h2>
                            <p className='text-center'>From Customer</p>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
};

export default BusinessSummary;