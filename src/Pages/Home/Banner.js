import React from 'react';
import banner1 from "../../images/banner/banner1.jpg";
import banner2 from "../../images/banner/banner2.jpg";
import banner3 from "../../images/banner/banner3.jpg";

const Banner = () => {
    return (
        <>
            <div class="carousel w-full h-screen">
                <div id="slide1" class="carousel-item relative w-full">
                <div className='w-full h-full bg-gray-700 top-0 left-0 absolute opacity-70'></div>
                <div className='w-full h-full flex flex-col absolute top-0 left-0  items-center'>
                    <div className='lg:block text-4xl font-extrabold text-red-400 ml-auto mr-40 mt-40'></div>
                    <div className='text-2xl text-gray-300 mt-4'>My Name is abu tanif</div>
                </div>
                    <img src={banner1} class="w-full" alt='' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                <div className='w-full h-full bg-gray-700 top-0 left-0 absolute opacity-70'></div>
                <div className='w-full h-full flex flex-col absolute top-0 left-0  items-center'>
                    <div className='lg:block text-4xl font-extrabold text-red-400 ml-auto mr-40 mt-40'></div>
                    <div className='text-2xl text-gray-300 mt-4'>My Name is abu tanif</div>
                </div>
                    <img src={banner2} class="w-full" alt='' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                <div className='w-full h-full bg-gray-700 top-0 left-0 absolute opacity-70'></div>
                <div className='w-full h-full flex flex-col absolute top-0 left-0  items-center'>
                    <div className='lg:block text-4xl font-extrabold text-red-400 ml-auto mr-40 mt-40'></div>
                    <div className='text-2xl text-gray-300 mt-4'>My Name is abu tanif</div>
                </div>
                    <img src={banner3} class="w-full" alt='' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;