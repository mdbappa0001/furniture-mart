import React from 'react';
import background from "../../images/banner/background.jpg";

const ContactUs = () => {
    return (
        <>

            <div>


                <div className='w-full relative'>
                    <div className='w-full h-full sm:w-full bg-gray-700 top-0 left-0 absolute opacity-70'></div>
                    <div className='w-full h-full flex flex-col absolute top-0 left-0 items-center'>
                        <div className='lg:block text-2xl font-bold text-yellow-400 mt-24'>Contact Us</div>
                        <div className='text-3xl  text-white mb-16 mt-2'>Stay Connected With Us</div>
                        <div>
                        <input type="email" placeholder="Email Address" class="input input-bordered input-error w-96 mb-6" /><br />
                        <input type="text" placeholder="Subject" class="input input-bordered input-error w-96 mb-6" /><br />
                        <textarea type="text" placeholder="Your Message" rows="6" class="input input-bordered input-error w-96 mb-6 h-48" /><br />
                        <button className='btn bg-lime-400 text-black hover:text-white ml-28'>Contact Submit</button>
                        </div>
                    </div>
                    <img className='w-full h-1/2 min-h-screen' src={background} alt="" />
                </div>

</div>
        </>
    );
};

export default ContactUs;