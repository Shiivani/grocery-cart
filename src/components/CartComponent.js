import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import CartList from './CartListComponent';
import CartTotal from './CartTotalsComponent';

export default class Cart extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {(value) => {
                        const {cart}= value;
                        if(cart.length>0){
                            return(
                                <>
                                    <h1>My Cart</h1> 
                                    <div className="cart-container">
                                            <div className="cart-row">
                                                <div className="cart-col">
                                                    <p>products</p>
                                                </div>
                                                <div className="cart-col">
                                                    <p>name of products</p>
                                                </div>
                                                <div className="cart-col">
                                                    <p>price</p>
                                                </div>
                                                <div className="cart-col">
                                                    <p>quantity</p>
                                                </div>
                                                <div className="cart-col">
                                                    <p>remove</p>
                                                </div>
                                                <div className="cart-col">
                                                    <p>total</p>
                                                </div>
                                            </div>
                                    </div>
                                    <CartList value={value} />
                                    <CartTotal value={value} />
                                </>
                            );
                        }
                        else {
                            return(
                                <div className="empty-container">
                                    <div className="empty-row">
                                        <div className="empty-col"> 
                                            <h2>Cart is currently empty</h2>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    }}
                </ProductConsumer>     
            </div>
        )
    }
}
