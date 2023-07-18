import React, { useState, useEffect } from "react";
import ProductsCard from "./Products/Cards";

const Products = (props = {}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const resp = await fetch("http://localhost:8000/gear");
        const data = await resp.json();
        if (data) setProducts(data);
        console.log("data: ", data);
      } catch (error) {
        console.log("Error:  ", error);
      }
    };

    getProducts();

    return() => {
      console.log("getting products")
    };
  }, [])
  const handleOnClick = (e, category) => {
    e.preventDefault();
    getProductsByCategory(category);
  }
  const getProductsByCategory = async (category) => {
    try {
      const resp = await fetch(`http://localhost:8000/gear/category/${category}`, {
      const data = await resp.json();
      if (data) setProducts(data)

    } catch (e) {
      console.log('ERROR: ', e);
    }
  };




  return (
    <div>
      {
      products.map((product) =>(
        <ProductsCard key={product.id} gear={product} />
      ))
      }
    </div>
  );
};

export default Products;
