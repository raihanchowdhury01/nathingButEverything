import React, { useEffect, useState } from 'react';
import ShopCard from './ShopCard';

const Shop = () => {
    const [value , setValue] = useState([]);
    useEffect(() => {
        fetch ('mobile.json')
        .then(r => r.json())
        .then(d => setValue(d))
    }, [])
    return (
        <div className='mt-20 grid grid-cols-3 gap-5'>
            <div className="product-type w-20 mt-20">
                
            </div>
            <div className="features">
            <div className="d-grid grid-cols-2 gap-48">
                
                {
                    value.map(product=><ShopCard key={product.id} product = {product}></ShopCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default Shop;