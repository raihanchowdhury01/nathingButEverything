import React, { useEffect, useState } from 'react';

const Xiaomi = () => {
    const [value , setValue] = useState([]);
    useEffect(() => {
        fetch ('vivo.json')
        .then(r => r.json())
        .then(d => setValue(d))
    }, [])
    return (
        <div>
           <div className='mt-20 grid grid-cols-3 gap-5'>
            <div className="product-type w-20 mt-20">
                
            </div>
            <div className="features">
            <div className="d-grid grid-cols-2 gap-48">
                
                {
                    value.map(product=><VivoCard key={product.id} product = {product}></VivoCard>)
                }
            </div>
            </div>
        </div>
        </div>
    );
};

export default Xiaomi;