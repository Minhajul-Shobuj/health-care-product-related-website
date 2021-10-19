import React from 'react';
import image1 from '../../image/5207289.jpg';
import image2 from '../../image/5063406.jpg';
import useProducts from '../../hooks/allProducts';

const Home = () => {
    const [products] = useProducts();
    console.log(products)
    const product = products.slice(4);
    return (
        <div className="mt-5 ">
            <div className="container fw-bolder bg-secondary rounded mx-5 d-flex justify-content-center text-warning">
                <div>
                    <h1>Drug-Store</h1>
                    <p>The most trustable Site for all kinds of medicine all over the world</p>
                </div>
            </div>
            <div>
                <div className="row fw-bolder mx-3 d-flex justify-content-center align-items-center my-3 text-warning">
                    <img className="col-lg-6 col-md-6" style={{ width: '500px', height: '300px' }} src={image1} alt="" />
                    <p className=" col-lg-6 col-md-6 mx-5 fs-5">Medicine is the field of health and healing. It includes nurses, doctors, and various specialists. It covers diagnosis, treatment, and prevention of disease, medical research, and many other aspects of health.</p>
                </div>
                <div className="row fw-bolder mx-3 d-flex justify-content-center align-items-center my-3 text-warning">
                    <p className="col-lg-6 col-md-6 mx-5 fs-5">Conventional modern medicine is sometimes called allopathic medicine. It involves the use of drugs or surgery, often supported by counseling and lifestyle measures.

                        Alternative and complementary types of medicine include acupuncture, homeopathy, herbal medicine, art therapy, traditional Chinese medicine, and many more.</p>
                    <img className="col-lg-6 col-md-6" style={{ width: '500px', height: '300px' }} src={image2} alt="" />
                </div>
            </div>
            <div>
                <h1 className="rounded-pill mx-3 fw-bolder text-success">Best selling Products</h1>
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