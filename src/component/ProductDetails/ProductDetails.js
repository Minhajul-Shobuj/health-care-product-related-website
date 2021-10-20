import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    let { productId } = useParams();
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    useEffect(() => {
        const singleproduct = products.find(product => parseInt(product.id) === parseInt(productId));
        setProduct(singleproduct);
    }, [products])
    return (
        <div className="container mt-5">
            <div > <img className="img-fluid" style={{ width: '500px' }} src={product?.img} alt="" /></div>
            <h1 className="text-secondary">{product?.name} (<small>{product?.type})</small></h1>
            <h5><span className="text-warning">Indication:</span> {product?.Indication}</h5>
            <p><span className="text-warning">Dosage:</span> {product?.Dosage}</p>
            <p><span className="text-warning">Preparation:</span> <small>{product?.Preparation}</small></p>
        </div>
    );
};

export default ProductDetails;