import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div>
            <h1>{productId}</h1>
            <h1>{products.length}</h1>
        </div>
    );
};

export default ProductDetails;