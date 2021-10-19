import React from 'react';
import image1 from '../../image/5207289.jpg';
import image2 from '../../image/5063406.jpg';
import useProducts from '../../hooks/allProducts';

const Home = () => {
    const [products] = useProducts();
    console.log(products)
    const product = products.slice(4);
    return (
        <div className="my-5">
            <div className=" fw-bolder bg-secondary rounded mx-5 d-flex justify-content-center mt-5 text-warning">
                <div>
                    <h1>Drug-Store</h1>
                    <p>The most trustable Site for all kinds of medicine all over the world</p>
                </div>
            </div>
            <div>
                <div className="row fw-bolder mx-3 d-flex justify-content-center align-items-center my-3 text-warning">
                    <img className="col-lg-6 col-md-6" style={{ width: '500px', height: '300px' }} src={image1} alt="" />
                    <p className=" col-lg-6 col-md-6 mx-5 fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellat atque doloremque veritatis reprehenderit, vel explicabo eaque exercitationem autem expedita error officia, libero tempore voluptate quae voluptatem pariatur molestias temporibus!</p>
                </div>
                <div className="row fw-bolder mx-3 d-flex justify-content-center align-items-center my-3 text-warning">
                    <p className="col-lg-6 col-md-6 mx-5 fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellat atque doloremque veritatis reprehenderit, vel explicabo eaque exercitationem autem expedita error officia, libero tempore voluptate quae voluptatem pariatur molestias temporibus!</p>
                    <img className="col-lg-6 col-md-6" style={{ width: '500px', height: '300px' }} src={image2} alt="" />
                </div>
            </div>
            <div>
                <h1 className="rounded-pill mx-3 fw-bolder text-success bg-dark">Best selling Products</h1>
            </div>
            <div className="container row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4 fw-bold">
                {
                    product.map(element =>
                        <div key={element.id} className="col cards rounded">
                            <div className="card h-100">
                                <img src={element.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{element.name}</h5>
                                    <p className="card-text">{element.type}</p>
                                    <div>                        <button className="me-3 rounded-pill btn btn-info">For more</button>
                                        <button className="me-3 rounded-pill btn btn-warning">Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Home;