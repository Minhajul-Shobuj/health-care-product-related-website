import React from 'react';
import { Link } from 'react-router-dom';
import './product.css'

const Product = (props) => {
    const { name, img, type, id } = props.product;
    return (
        <div>
            <div className="col cards rounded">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{type}</p>
                        <div>
                            <Link to={`/product/${id}`}>
                                <button className="me-3 rounded-pill btn btn-info">For more</button>
                            </Link>
                            <button className="me-3 rounded-pill btn btn-warning">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;