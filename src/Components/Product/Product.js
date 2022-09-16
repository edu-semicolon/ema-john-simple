import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";
const Product = (props) => {
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="productName">{name}</h4>
        <p>by: {seller}</p>
        <h5>${price}</h5>
        <p>
          <small>Only {stock} left in stock - order soon</small>
        </p>
        <button onClick={()=>props.handleAddProduct(props.product)} className="btn"><FontAwesomeIcon icon={faShoppingCart} /> Add to card</button>
      </div>
    </div>
  );
};

export default Product;
