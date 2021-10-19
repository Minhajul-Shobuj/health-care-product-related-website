import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../image/3973481.jpg'

const NotFound = () => {
    return (
        <div>
            <h1>The page you are looking for is not Found;</h1>
            <img style={{ width: '500px' }} src={image} alt="" />
            <br />
            <Link to="/home"><button className="btn btn-danger">Back to home</button></Link>
        </div>
    );
};

export default NotFound;