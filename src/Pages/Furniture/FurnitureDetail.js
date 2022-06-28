import React from 'react';
import { useParams } from 'react-router-dom';

const FurnitureDetail = () => {
    const {furnitureId} = useParams();
    return (
        <div>
            <h2>This is for details : {furnitureId}</h2>
        </div>
    );
};

export default FurnitureDetail;