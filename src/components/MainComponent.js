import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './HeaderComponent.js';
import ProductList from './ProductListComponent.js';
import Details from './DetailsComponent.js';
import Cart from './CartComponent.js';
import Default from './DefaultComponent.js';
import Footer from './FooterComponent.js';

export default class Main extends Component {
    
    render() {      
        return (
            <div>
              <>
                <Header />
                <Switch>
                    <Route exact path="/" component={ProductList} />
                    <Route path="/details" component={Details} />
                    <Route path="/cart" component={Cart} />
                    <Route component={Default} />
                </Switch>
                <Footer />
              </>  
            </div>
        )
    }
}
