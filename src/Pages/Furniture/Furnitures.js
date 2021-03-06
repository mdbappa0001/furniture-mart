import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Furniture from './Furniture';


const Furnitures = () => {
    const [furnitures, setFurnitures] = useState([]);
    useEffect(() => {
        fetch('https://delicat-saucisson-56529.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setFurnitures(data))
    }, [])

    return (
        <>
            <div className=' bg-gray-600 py-2'>

                <h2 className='text-2xl font-extrabold lg:text-4xl lg:font-bold lg:ml-10  mt-12  text-white lg:mb-8'>Choose From<span className='text-secondary'> Our Gallery</span></h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-12 px-12 mb-16'>

                    {
                        furnitures.map(furniture => <Furniture
                            key={furniture._id}
                            furniture={furniture}
                        ></Furniture>)
                    }

                </div>

                <div className='text-center'>
                    <Link to={`/manage-items`} className="inline-flex rounded items-center py-3 px-3 mb-12 font-bold text-center bg-white hover:bg-blue-700 focus:ring-4 hover:text-white focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Manage Inventory
                    </Link>
                </div>

            </div>

        </>
    );
};

export default Furnitures;