import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import ProductList from './ProductListComponent.js';
import Checkout from './CheckoutComponent';

export default class Home extends Component {
    render() {
        return (
            <ProductConsumer>
                {(list)=>{
                    const {openModal} =list;
                   return(
                    <div>
                        <ProductList/>
                        <Checkout />
                    </div>
                   )
                }

                }
            </ProductConsumer>
        )
    }
}
