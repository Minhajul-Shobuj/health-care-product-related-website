import React from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const { productId } = useParams();
    return (
        <div>
            <h1>product details{productId}</h1>
        </div>
    );
};

export default ProductDetails;