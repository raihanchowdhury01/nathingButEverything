import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Home = () => {
    const [value , setValue] = useState([]);
    useEffect(() => {
        fetch ('mobile.json')
        .then(r => r.json())
        .then(d => setValue(d))
    }, [])
    return (
        <div>
            <div className="flex justify-around mt-10">
                <div className="">

                </div>
                <div className="grid grid-cols-3 gap-20">
                {
                    value.map(product=><Card key={product.id} product = {product}></Card>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;