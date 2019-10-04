import React, { Component } from 'react';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cart: [],
            error: null,
            isLoaded: false,        
        };
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/Shiivani/product-db/master/products.json')
        .then( res=> res.json())
        .then(
            (results) => {
                this.setState({
                    isLoaded: true,
                    products: results
                });
            },
            (error) => {
                this.setState({
                    isLoaded:true,
                    error
                });
            }
        )
    }

    getItem = (id) =>{
        const product = this.state.products.find(item => item.id===id);
        return product;
    }

    addToCart = (id) =>{
        let tempProducts = this.state.products;
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=>{
            return { products:tempProducts, cart: [...this.state.cart, product] }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                products: this.state.products,
                addToCart: this.addToCart
                }}>
               { this.props.children } 
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
