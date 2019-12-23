import React from 'react';
import Merge from '../../hoc/Merge';
import classes from './Layout.css';
const layout=(props)=>(
    <Merge>
    <div>Toolbar,SideDrawer,Backdrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Merge>
);
export default layout;