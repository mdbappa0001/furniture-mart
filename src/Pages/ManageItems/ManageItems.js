import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import Tr from './Tr';

const ManageItems = () => {

    const [furnitures, setFurnitures] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:5000/service')
            .then(res => {
                setFurnitures(res.data)
                setLoading(false)
            }).then(err => {

                // console.log(err)
            })
    }, [])


    // delete function ---------------------------------------------------------------------------
    const handelDelete = (id, name) => {
        const confirm = window.confirm("Are You Sure Want To delete  " + name);
        if (confirm) {
            const url = `http://localhost:5000/service/${id}`
            axios.delete(url)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const remaining = furnitures.filter(book => book._id !== id)
                        setFurnitures(remaining)
                    }
                }).then(err => {
                    // console.log(err)
                })
        }
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <>
            <div className='flex justify-center text-center'>
            <div className='md:w-1/2 '>
                <h1 className='text-center text-[#00307E] font-extrabold inline relative my-underline text-3xl'>All Furniture</h1>
                <div className='text-center'>
                    <Link to={`/add-items`} className="inline-flex rounded items-center py-2 px-3 my-10 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add Items
                    </Link>
                </div>
                <table className=' w-full text-sm text-center text-gray-500 dark:text-gray-400'>

                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">
                                Image
                            </th>
                            <th className="px-6 py-3">
                                Name
                            </th>
                            <th className="px-6 py-3">
                                edit
                            </th>
                            <th className="px-6 py-3">
                                Update
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            furnitures.map(furniture => <Tr furniture={furniture} key={furniture._id} handelDelete={handelDelete}></Tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default ManageItems;