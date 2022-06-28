import React from 'react';
import banner1 from "../../images/banner/banner1.jpg";
import banner2 from "../../images/banner/banner2.jpg";
import banner3 from "../../images/banner/banner3.jpg";

const Banner = () => {
    return (
        <>
            <div className="carousel w-full lg:h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='w-full h-full bg-gray-700 top-0 left-0 absolute opacity-70'></div>
                    <div className='w-full h-full flex flex-col absolute top-0 left-0  items-center justify-center'>
                        <div className='text-2xl pl-4 md:text-4xl lg:text-5xl font-bold text-white'>Top Furniture manufacturer Company in the World</div>
                        <div className='py-5 text-white pl-6'>We Need Help on Tools Importing from Us? Furniture Mart Recommend You The Best Furniture and Tools Shippipment</div>
                        <a href="#contact">
                            <button className='btn bg-lime-500 text-black hover:bg-lime-700 hover:text-white'>Get Started Your Business With Us</button>
                        </a>
                    </div>
                    <img src={banner1} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='w-full h-full bg-gray-700 top-0 left-0 absolute opacity-70'></div>
                    <div className='w-full h-full flex flex-col absolute top-0 left-0  items-center justify-center'>
                        <div className='text-2xl pl-4 md:text-4xl lg:text-5xl font-bold text-white'>Top Furniture manufacturer Company in the World</div>
                        <div className='py-5 text-white pl-6'>We Need Help on Tools Importing from Us? Furniture Mart Recommend You The Best Furniture and Tools Shippipment</div>
                        <a href="#contact">
                            <button id='contactUs' className='btn bg-lime-500 text-black hover:bg-lime-700 hover:text-white'>Get Started Your Business With Us</button>
                        </a>
                    </div>
                    <img src={banner2} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='w-full h-full bg-gray-700 top-0 left-0 absolute opacity-70'></div>
                    <div className='w-full h-full flex flex-col absolute top-0 left-0  items-center justify-center'>
                        <div className='text-2xl pl-4 md:text-4xl lg:text-5xl font-bold text-white'>Top Furniture manufacturer Company in the World</div>
                        <div className='py-5 text-white pl-6'>We Need Help on Tools Importing from Us? Furniture Mart Recommend You The Best Furniture and Tools Shippipment</div>
                        <a href="#contact">
                            <button id='contactUs' className='btn bg-lime-500 text-black hover:bg-lime-700 hover:text-white'>Get Started Your Business With Us</button>
                        </a>
                    </div>
                    <img src={banner3} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;