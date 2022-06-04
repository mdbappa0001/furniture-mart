import React from 'react';
import furnitureSet from "../../images/Home furniture set.jpg";
import bullet from "../../images/icons/bullet.png";

const About = () => {
    return (
        <>
            <div className=' bg-gray-600 py-2'>

                <h2 className='text-center text-2xl lg:text-4xl font-bold text-white'>We Need Help on Furniture Importing from Us?</h2>
                <p className='text-center text-xl lg:text-2xl lg:font-bold text-yellow-200 mt-4 '>Furniture Mart Recommend You The Best Furniture Shippipment</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-12 lg:mt-24 px-12 mb-16'>

                    <div className='justify-center text-center lg:mt-8 w-11/12 ml-4'>

                        <div className='flex items-center mb-6'>
                        <img className='w-6' src={bullet} alt="" />
                        <p className=' text-white ml-2'>Alliance Inc as a professional freight forwarder in China, know very well on our tool.</p>
                        </div>

                        <div className='flex items-center mb-6'>
                        <img className='w-6' src={bullet} alt="" />
                        <p className=' text-white ml-2'>Alliance Inc is expert on all importing process for your tools import from BanglaDesh.</p>
                        </div>

                        <div className='flex items-center mb-6'>
                        <img className='w-6' src={bullet} alt="" />
                        <p className=' text-white ml-2'>Slip joint, groove joint, and long nose pliers come with the socke the best stoke in the world.</p>
                        </div>

                        <div className='flex items-center mb-6'>
                        <img className='w-6' src={bullet} alt="" />
                        <p className=' text-white ml-2'>Alliance Inc as a professional freight forwarder in China, know very well on our tool.</p>
                        </div>
                    
                        <button className='btn bg-orange-300 text-black w-full hover:text-orange-400'>Let Furniture Mart Recomended Best Furniture For You</button>
                    </div>

                    <div>
                        <img className='w-5/6 ml-10 lg:ml-24' src={furnitureSet} alt="" />
                    </div>

                </div>

            </div>
        </>
    );
};

export default About;