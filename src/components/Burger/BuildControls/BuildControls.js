import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'
const controls = [
    { label: 'salad', type: 'salad' },
    { label: 'bacon', type: 'bacon' },
    { label: 'cheese', type: 'cheese' },
    { label: 'meat', type: 'meat' }
]
const buildControls = (props) => (

    <div className={classes.BuildControls}>
        <p>Currnt Price:<strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctlr => (
            <BuildControl
                key={ctlr.label}
                label={ctlr.label}

                added={()=>props.ingredientAdded(ctlr.type) }
                removed={()=>props.ingredientRemoved(ctlr.type)} 
                disabled={props.disabled[ctlr.type]} />
        ))}
    </div>
);
export default buildControls;