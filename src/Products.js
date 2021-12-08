import React, { Component } from 'react'
import Client from 'shopify-buy';

const client = Client.buildClient({
    domain: 'Santoshi12.myshopify.com',
    storefrontAccessToken: '6e5f63ae49047b3c7896dfee3fa61f82'
  });

export default class Products extends Component {
    state={
        products:[],
        product:{},
        checkout:{}
      }
      componentDidMount() {
        this.fetchAllProducts();
        this.checkout();
    }
    
    checkout=async()=>{
      const checkout =await client.checkout.create()
      this.setState({checkout:checkout})
    }
    
    fetchAllProducts= async()=>{
      const products =await client.product.fetchAll()
      this.setState({products:products})
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
