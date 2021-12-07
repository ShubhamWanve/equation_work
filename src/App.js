import React, { Component } from 'react';
import axios from 'axios';

const key="9367bee3da6d2649df30aea0fe04ec3b";
const pass="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";
const base64encodedData = Buffer.from(key + ':' + pass).toString('base64');
const headers={
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  "Accept": "application/json", 
  "Authorization": 'Basic ' + base64encodedData,
  "Access-Control-Allow-Origin": "*",
  'Access-Control-Allow-Credentials':true
}

export default class App extends Component {

  componentDidMount() {
    axios.get(`https://santoshi12.myshopify.com/admin/api/2021-10/products.json`,{ method:'GET',headers})
    .then(res => {
      console.log("Shubham:-",res)
      // this.setState({ persons });
    })
}
  render() {
    return (
      <div>
        Shubham
      </div>
    )
  }
}
