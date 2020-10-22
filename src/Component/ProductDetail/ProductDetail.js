import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData'
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams()

   const product =  fakeData.find(pd => pd.key === productKey)
  
     
    return (
        <div>
            <h3>prodcut detail is coming soon {productKey}</h3>
            <h2>Why filter kaj korena kalke first aita niye think</h2>
            <Product product ={product} showAddCart={false}></Product>
        </div>
    )
};

export default ProductDetail;