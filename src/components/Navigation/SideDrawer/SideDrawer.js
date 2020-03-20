import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop'
import Merge from '../../../hoc/Merge'
const sideDrawer = (props) => {

    return (
        <Merge>
            <Backdrop show/>
            <div className={classes.SideDrawer}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems/>
                </nav>

            </div>
        </Merge>
    );
}

export default sideDrawer;
