import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { AiFillTool } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Tr = ({ furniture, handelDelete }) => {
    const { img, name, _id } = furniture
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4 w-10 h-10">
                <img src={img} alt="" />
            </td>
            <td className="px-6 py-4 text-xs">
                {name}
            </td>

            <td className="px-6 py-4 ">
                <button onClick={() => handelDelete(_id, name)}> <AiTwotoneDelete className='w-8 h-8 text-[#F70000] hover:text-[#f70000dc]' /></button>
            </td>
            <td className="px-6 py-4">
                <Link to={`/furniture/${_id}`}> <AiFillTool className='w-8 h-8 inline-block text-[#004f0c] hover:text-[#004802f4]' /></Link>
            </td>
        </tr>
    );
};

export default Tr;