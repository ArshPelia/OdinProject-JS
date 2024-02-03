import React,  {useState} from "react";
import '../styles/product.css'


const Product = ({title, price, image}) => {
	  

    return(
			<article className='product__item'>
                <div className='product__item-image'>
                    <img src={image} alt={title} />
                </div>

                <h3>{title}</h3>
                <h4>Price: {price}</h4>
            </article>
    );
}

export default Product