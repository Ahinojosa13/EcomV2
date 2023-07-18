import React, { useState, useEffect } from "react";
import ProductsCard from "./Cards";
import Dropdown2 from "./Dropdown";

const Products = () => {
  const [products, setProducts] = useState([]);

  // On render call fetch all plans
  useEffect(() => {
    // Fetch products and set initial state
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/gear");
        const data = await response.json();
        if (data) {
          setProducts(data);
        }
        console.log("data: ", data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchProducts();

    return () => {
      console.log("getting products");
    };
  }, []);

  return (
    <div>
      <Dropdown2 setProducts={setProducts}/>
      {products.map((product) => (
        <ProductsCard key={product.id} gear={product} />
      ))}
    </div>
  );
};

export default Products;
