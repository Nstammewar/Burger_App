import React from 'react';
import Merge from '../../../hoc/Merge';
const orderSummary = (props) =>{
    const ingredientSummary=Object.keys(props.ingredients)
    .map(igKey=>{
        return(
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>{props.ingredients[igKey]}
            </li>
        )
    })
    return(
        <Merge>
            <h3>Your Order</h3>
            <p>A delicous burger with the following  ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout ? </p>
        </Merge>
    );
};
export default orderSummary;