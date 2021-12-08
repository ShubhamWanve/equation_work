import React, { Component } from 'react';
import axios from 'axios';
import Products from './Products';

const key="9367bee3da6d2649df30aea0fe04ec3b";
const pass="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";
const base64encodedData = Buffer.from(key + ':' + pass).toString('base64');
const headers={
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  "Accept": "application/json", 
  "Authorization": 'Basic ' + base64encodedData,
  "Access-Control-Allow-Origin": "*",
  'Access-Control-Allow-Credentials':true,
}
export default class App extends Component {
  state={
    products:[]
  }

  componentDidMount() {
    axios.get(`https://${key}:${pass}@santoshi12.myshopify.com/admin/api/2021-10/products.json`,{ method:'GET',
    headers:{
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Accept": "application/json", 
      // "Authorization": 'Basic ' + base64encodedData,
      // "Access-Control-Allow-Origin": "*",
      // 'Access-Control-Allow-Credentials':true,
    }})
    .then(res => {
      console.log("Shubham:-",res)
      this.setState({products:res})
    })
}
  render() {
    return (
      <div>
        Shubham
        <Products/>
      </div>
    )
  }
}