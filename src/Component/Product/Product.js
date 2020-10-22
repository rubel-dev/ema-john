import React from 'react';
import './Product.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
     
      const {img, price, name,category, stock,key} = props.product;
      console.log(img)
      
    return (
        <div class='col-md-12 product-container'>
            <div className='d-flex justify-content-between box'> 
                <div>
                    <img src={img} className=' img' alt=""/>
                </div>
                <div className='ml-3 content'>
                    <h4><Link to={`/product/`+key}>{name}</Link></h4>
                     <p><small>by : {category}</small></p> 
                    <p>${price}</p>
                    <p><small>Only left - {stock} in stock Order Soon</small></p>
                   {props.showAddCart &&  <button onClick={()=>props.handleAddProduct(props.product)} className='btn btn-warning'><FontAwesomeIcon icon={faShoppingCart}/>add to cart</button>}
                </div>
            </div>
        </div>
    );
};

export default Product;