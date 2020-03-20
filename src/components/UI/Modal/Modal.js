import React from 'react';
import classes from './Modal.css';
import Merge from '../../../hoc/Merge'
import Backdrop from '../Backdrop/Backdrop'
const modal = (props) => (
    <Merge>
        <Backdrop show={props.show} clicked={props.modelClosed}></Backdrop>
    <div className={classes.Modal}
    style={{
        transform:props.show?'translateY(0)':'translateY(-100vh)',
        opacity:props.show ? '1':'0'
    }}>
        {props.children}
    </div>
    </Merge>
);
export default modal;