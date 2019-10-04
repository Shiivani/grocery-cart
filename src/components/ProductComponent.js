import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Product extends Component {
    render() {
        const { id, brandName, productName, quantity, price, MRP, imageUrl, offerText, inCart }= this.props.product;
        return (
            <div className="productWrapper">
                <ProductConsumer>
                    { list => (
                        <div className="Card">
                        <div className="productCard">
                            <div className="img-container">
                                <img src={imageUrl} alt={productName} />
                                <p className="offer-text">{offerText}</p>
                            </div>
                        </div>
                        <div class="productDetails">
                            <h2 className="brand-name">{brandName}</h2>
                            <h3 className="product-name">{productName}</h3>
                            <p className="quantity">{quantity}</p>
                            <p className="mrp">{MRP}</p>
                            <h4 className="price">{price}</h4>
                            <button className="cart-button" disabled={inCart ? true : false} onClick={() => {
                                list.addToCart(id);
                            }}>
                                {inCart?(<h3 disabled>In Cart</h3>):(<h3 disabled>Add To Cart</h3>)}
                            </button>
                        </div>
                        </div>
                    )}
                    
                </ProductConsumer>
            </div>
        )
    }
}
