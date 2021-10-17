import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return (
        <div>
            <h1>Product:{products.length}</h1>
            <div className="container row row-cols-1 row-cols-md-3 g-4 fw-bold">

                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;