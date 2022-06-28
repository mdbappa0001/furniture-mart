import React from 'react';
import review1 from "../../images/review/pic-1.png";
import review2 from "../../images/review/pic-2.png";
import review3 from "../../images/review/pic-3.png";
// import quote form "../../images/review/quote-img.png";

const Review = () => {
    return (
        <>
            <div className=' bg-gray-600 py-2'>

                <h1 className='text-2xl lg:text-4xl font-bold text-center text-white'>Customer <span className='text-secondary'>Review</span></h1>


                <div className='mt-16 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>

                    <div>
                        {/* { <img src={quote} alt="" /> } */}
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <small className='font-bold'>This is the best collection i have ever seen.Buying this product i have enjoyed a lot.I hope you will also try it and enjoy a lot.</small>
                            </div>
                            <div className="rating">
                                <span className='font-bold text-xl ml-8 mr-3'>Rating : </span>
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className='flex items-center'>
                                <div className="avatar px-8 py-5">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                        <img src={review1} alt='' />
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-xl font-bold'>William Cox</h4>
                                    <small className='font-extrabold'>*Canada</small>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        {/* <img src={quote} alt="" /> */}
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <small className='font-bold'>This is the best collection i have ever seen.Buying this product i have enjoyed a lot.I hope you will also try it and enjoy a lot.</small>
                            </div>
                            <div className="rating">
                                <span className='font-bold text-xl ml-8 mr-3'>Rating : </span>
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className='flex items-center'>
                                <div className="avatar px-8 py-5">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                        <img src={review2} alt='' />
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-xl font-bold'>Maria Khan</h4>
                                    <small className='font-extrabold'>*Soudi Arabia</small>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        {/* <img src={quote} alt="" /> */}
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <small className='font-bold'>This is the best collection i have ever seen.Buying this product i have enjoyed a lot.I hope you will also try it and enjoy a lot.</small>
                            </div>
                            <div className="rating">
                                <span className='font-bold text-xl ml-8 mr-3'>Rating : </span>
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className='flex items-center'>
                                <div className="avatar px-8 py-5">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                        <img src={review3} alt='' />
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-xl font-bold'>Chris Rox</h4>
                                    <small className='font-extrabold'>*USA</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Review;