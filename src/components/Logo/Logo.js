import React from 'react';
import clasees from './Logo.css';
import burgerLogo from '../../assets/Images/burger-logo.png';

const logo=(props)=>(
    <div className={clasees.Logo}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
);

export default logo;