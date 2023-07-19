import React from "react";
import "../../styles/Cards.css";

const ProductsCard = ({gear}) => {
    const {
        images,
        name,
        description,
        alt,
        price,
    } = gear;
    
    return(
        <div>
            <section className="cards">
            <img src={images} alt={alt}/> <br/> 
            <h2>{name}</h2> <br/>
            <p>{description}</p> <br/>
            <span>{price}</span> <br/>
            <button>Order Now</button> <br/> 
            </section>
        </div>
    )
}

export default ProductsCard;