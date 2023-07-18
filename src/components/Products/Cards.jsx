import React from "react";
import "../../styles/Cards.css";

const ProductsCard = ({gear}) => {
    const {
        image,
        name,
        description,
        alt,
        price,
    } = gear;

    function getImagePath(image) {
        return `../../${image}`;
    }

    return(
        <div>
            <section className="cards">
            <img src={getImagePath()} alt={alt}/> 
            <h2>{name}</h2> 
            <p>{description}</p> 
            <span>{price}</span> 
            <button>Order Now</button> 
            </section>
        </div>
    )
}

export default ProductsCard;