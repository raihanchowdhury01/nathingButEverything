import React from 'react';
import { NavLink } from 'react-router-dom';

const SubLink = ({route}) => {
    const {name} = route;
    return (
        <div>
            <NavLink to={'/fifthk'}>{name}</NavLink>
        </div>
    );
};

export default SubLink;