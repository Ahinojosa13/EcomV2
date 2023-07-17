import React from "react";

function Products({image, name, price, info}){
    return(
        <div className="products">
            <div style={{ backgroundImage: `url(${image})`}}></div>
            <h1> {name} </h1>
            <p> ${price} </p>
        </div>
    )
}
export default Products;