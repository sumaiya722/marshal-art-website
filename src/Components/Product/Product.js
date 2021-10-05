import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const { name, img, cost, target, duration } = props.product;
    return (
        <div className="service-product">
            <div>
                <img src={img} alt="" />
                <h2>Course Name:{name}</h2>
                <h3>Course Duration:{duration}</h3>
                <h3>Cost:${cost}</h3>
                <h2>Target:{target}</h2>
            </div>
        </div>
    );
};

export default Product;