import React from 'react';
import classses from './Burger.css';
import  BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger=(props)=>{
    let transformationIngredients=Object.keys(props.ingredients)
    .map(igKey=>{
         return [...Array(props.ingredients[igKey])].map((_,i)=>{
            console.log('i = '+i)
            return <BurgerIngredient key={igKey + i} type={igKey}/>;
        });
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
    console.log(transformationIngredients);
    if(transformationIngredients.length===0){
        transformationIngredients=<p>Please start adding ingredients!</p>
    }
    return(
        <div className={classses.Burger}>
            <BurgerIngredient type='bread-top'/>
           {transformationIngredients}
            <BurgerIngredient type='bread-bottom'/>
           
        </div>
    );
};
export default burger;