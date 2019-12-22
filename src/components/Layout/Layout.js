import React from 'react';
import Con from '../../hoc/Con';
import classes from './Layout.css';
const layout=(props)=>(
    <Con>
    <div>Toolbar,SideDrawer,Backdrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Con>
);
export default layout;