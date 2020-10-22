import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

 

const Shop = () => {
    const first10 = fakeData.slice(0,10)
   const [product ,setProduct] = useState(first10)
   const [cart ,setCart] = useState([])
   const handleAddProduct =(product)=>{
       const newProduct =[...cart,product] 
        setCart(newProduct)
   }


    return (
        <div className='container'> 
            <div className='row'>
                <div className=' col-md-9 shop'>
                    <div>
                      {product.map(pd =><Product showAddCart ={true} product ={pd} handleAddProduct={handleAddProduct}></Product>)}
                    </div>
                </div>
                <div className=' col-md-3 cart'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;