import React, { Component } from "react";
import Merge from '../../hoc/Merge';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}
class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchaseable:false,
        purchasing:false
    }
    updatePurchaseState=(ingredients)=>{
        const sum=Object.keys(ingredients)
        .map(igKey=>{
            return ingredients[igKey];
        }).reduce((sum,el)=>{
            return sum+el;
        },0);
        this.setState({purchaseable:sum>0});
    }
    addIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const updatedIngredient={
            ...this.state.ingredients
        }
        updatedIngredient[type]=updatedCount;
        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        this.setState({
            totalPrice:newPrice,
            ingredients:updatedIngredient
        })
        this.updatePurchaseState(updatedIngredient);
    }
    removeIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount=oldCount-1;
        const updatedIngredient={
            ...this.state.ingredients
        }
        updatedIngredient[type]=updatedCount;
        const priceDeduction=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceDeduction;
        this.setState({
            totalPrice:newPrice,
            ingredients:updatedIngredient
        })
        this.updatePurchaseState(updatedIngredient);
    }
    purchaseHandler = () => {
        this.setState({purchasing:true})
    }
    purchaseCancleHandler=()=>{
        this.setState({purchasing:false});
    }
    purchaseContinueHandler=() => {
        alert('continue purchase')
    }
    render(){
        const disabledInfo={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }
        return(
            <Merge>
                <Modal show={this.state.purchasing}  modelClosed={this.purchaseCancleHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    purchaseCancelled={this.purchaseCancleHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchaseable}
                ordered={this.purchaseHandler}
                price={this.state.totalPrice}/>

            </Merge>

        );
    }
}
export default BurgerBuilder;