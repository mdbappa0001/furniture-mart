import React from 'react';

import notFound from "../../images/notFound.png";

const NotFound = () => {
    return (
        <div>
            <img className='flex mx-auto' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;