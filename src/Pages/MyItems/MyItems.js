import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Footer from '../Home/Footer';
import Tr from '../ManageItems/Tr';
import Loading from '../Shared/Loading';


const MyItems = () => {
    const [loading, setLoading] = useState(false)
    const [user] = useAuthState(auth)

    const [myItems, setMyItems] = useState([])

    // delete function ---------------------------------------------------------------------------
    const handelDelete = (id, name) => {
        const confirm = window.confirm("Are You Sure Want To delete  " + name);
        if (confirm) {
            const url = `https://delicat-saucisson-56529.herokuapp.com/service/${id}`
            axios.delete(url)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const remaining = myItems.filter(book => book._id !== id)
                        setMyItems(remaining)
                    }
                }).then(err => {
                    // console.log(err)
                })
        }
    }



    useEffect(() => {
        const email = user?.email;
        const getMyItems = async () => {
            setLoading(true)
            const url = `https://delicat-saucisson-56529.herokuapp.com/my-items?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                setMyItems(data)
                setLoading(false)
            }
            catch (error) {
                if (error.response.status === 403 || 401) {
                    toast.error('You Have No access on this data logged out...');

                    Navigate('/login')
                }
            }
        }
        getMyItems();
    }, [user])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <>
            <div className='flex justify-center min-h-[90vh]'>
                <div className='md:w-1/2 text-center'>
                    <h1 className='text-center text-[#00307E] font-extrabold inline relative my-underline text-4xl mt-5'>My Furniture</h1>
                    <div className='text-center mt-4'>
                        <Link to={`/add-items`} className="inline-flex rounded items-center py-2 px-3 my-4 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Add Items
                        </Link>
                    </div>
                    <table className='w-full text-sm text-center text-gray-500 dark:text-gray-400'>
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
                                myItems.map(furniture => <Tr furniture={furniture} key={furniture._id} handelDelete={handelDelete}></Tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MyItems;