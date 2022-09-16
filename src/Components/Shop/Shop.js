import fakeData from '../../fakeData';
import React, { useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [cart, setCart]=useState([]);
    const handleAddProduct=(product)=>{
        console.log('product added');
        const newCart=[...cart,product];
        setCart(newCart)

    }
    const first10 =fakeData.slice(0,10);
    const [products, setProducts] = useState (first10);
    return (
        <div className='shopContainer'>
            <div className="productContainer">
                {
                    products.map(pd => <Product handleAddProduct=  {handleAddProduct}
                        product={pd}></Product>)
                }
            </div>
            <div className="cardContainer">
                <Cart cart={cart}></Cart>
                
            </div>
         
        </div>
    );
};

export default Shop;