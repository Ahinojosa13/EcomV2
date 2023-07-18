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

    // function getImagesPath(images) {
    //     return `.${images}`;
    // }

    return(
        <div>
            <section className="cards">
            <img src={images} alt={alt}/> 
            <h2>{name}</h2> 
            <p>{description}</p> 
            <span>{price}</span> 
            <button>Order Now</button> 
            </section>
        </div>
    )
}

export default ProductsCard;