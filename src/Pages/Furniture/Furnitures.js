import React, { useEffect, useState } from 'react';
import Furniture from './Furniture';


const Furnitures = () => {
    const [furnitures, setFurnitures] = useState([]);
    useEffect(() => {
        fetch('furniture.json')
            .then(res => res.json())
            .then(data => setFurnitures(data))
    }, [])

    return (
        <>
            <div className='w-full bg-gray-600 absolute'>
            
                <h2 className='text-2xl font-extrabold lg:text-4xl lg:font-extrabold text-orange-400 mt-12 text-center'>Furniture Gallery</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-12 px-12 mb-16'>

                    {
                        furnitures.slice(0, 4).map(furniture => <Furniture
                            key={furniture._id}
                            furniture={furniture}
                        ></Furniture>)
                    }

                </div>
            </div>

        </>
    );
};

export default Furnitures;