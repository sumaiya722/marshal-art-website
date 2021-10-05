import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Service.css';

const Service = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./tools.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div className="service-container">

            {/* <h4>Products:{products.length}</h4> */}
            {
                products.map(product => <Product product={product}
                    key={product.key}
                ></Product>)
            }

        </div>
    );
};

export default Service;