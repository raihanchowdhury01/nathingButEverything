import React, { useEffect, useState } from 'react';
import SamsungProudct from '../SamsungProduct/SamsungProudct';

const OneToTenKSamsung = () => {
    // const [samsung , setSamsung] = useState('');
    // console.log(samsung);
    // useEffect(() => {
    //     fetch('samsung.json')
    //     .then(r => r.json())
    //     .then(d => setSamsung(d))
    // }, []);
    const samsung = [
        
            {
                "id" : 995,
                "name" :"Samsung Galaxy A14",
                "img" : "../src/Image/Samsung/galaxy-a14.jpg"
              },
              {
                "id": 996,
                "name": "Samsung Galaxy A14",
                "img": "../src/Image/Samsung/galaxy-a14.jpg"
              },
        
    ]
    return (
        <div>
            <div className="">
                <span>
                    {
                   samsung.map(s => <SamsungProudct
                   key={s}
                   pro = {s}
                   >

                   </SamsungProudct>) 
                    }
                </span>
            </div>
        </div>
    );
};

export default OneToTenKSamsung;