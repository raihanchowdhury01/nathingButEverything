import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Link.css';
import SubLink from './SubLink';
import Test from '../OneToTenSamsung/OneToTenKSamsung';
const Link = () => {
    const [open , setOpen] = useState(false);
    // const [sd , setSd] = useState('');
    // useEffect(()=>{
    //     fetch ('subLink.json')
    //     .then(r => r.json())
    //     .then(d => setSd(d))
    // }, [])
    const routes = [
        {
            id : 1,
            name : "1k - 10k",
        },
        {
            id : 2,
            name : "11k - 15k",
        }
    ]
    return (
        <div className=''>
            <div>
                <ul className="nav-menubar flex ml-5">
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li onClick={() => setOpen(!open)} className=''>
                        <span>
                            {
                                open === true ?
                                <NavLink to={'/samsung'}>Samsung</NavLink> 
                                :
                                <NavLink to={'/samsung'}>Samsung</NavLink>
                            }
                        </span>
                       <ul className={`absolute duration-1000 ${open ? 'top-6' : '-top-48'}`}>
                        <li>
                           {
                            routes.map(route => <SubLink key={route.id} route = {route}></SubLink>)
                           }
                        </li>
                       </ul>
                    </li>
                    <li>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><NavLink to={'/vivo'}>Vivo</NavLink></li>
                    <li><NavLink to={'/xiaomi'}>Xiaomi</NavLink></li>
                    <li><NavLink to={'/oppo'}>Oppo</NavLink></li>
                    <li><NavLink to={'/tecno'}>Tecno</NavLink></li>
                    <li><NavLink to={'/infinix'}>Infinix</NavLink></li>
                    <li><NavLink to={'/apple'}>Apple</NavLink></li>
                    <li><NavLink to={'/onePlus'}>OnePlus</NavLink></li>
                    <li><NavLink to={'/symphony'}>Symphony</NavLink></li>
                    <li><NavLink to={'/itel'}>Itel</NavLink></li>
                </ul>
            </div>

      
      
        </div>
    );
};

export default Link;