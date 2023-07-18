import React, { useState, useEffect } from "react";
import ProductsCard from "./Cards";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch products and set initial state
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/gear");
        const data = await response.json();
        if (data) {
          setProducts(data);
          setFilteredProducts(data);
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

  const handleFilterChange = (catergory) => {
    if (catergory === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.sort === catergory);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      {filteredProducts.map((product) => (
        <ProductsCard key={product.id} gear={product} />
      ))}
    </div>
  );
};

export default Products;
