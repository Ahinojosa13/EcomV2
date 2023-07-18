import React, { useState, useEffect } from "react";

const Dropdown = ({ setProducts }) => {
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      console.log("category:  ", category);
      try {
        const response = await fetch(
          `http://localhost:8000/gear/category/${category}`
        );
        const data = await response.json();
        if (data) {
          setProducts(data);
        }
        console.log("data: ", data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchProductsByCategory();

    return () => {
      console.log("getting products");
    };
  }, [category]);

  return (
    <div className="filtered-items">
      <div className="button-container">
        <button
          className="button-filter"
          onClick={() => setCategory("juice")}
        >
          Supplements
        </button>

        <button
          className="button-filter"
          onClick={() => setCategory("gymgear")}
        >
          Gym Gear
        </button>

        <button
          className="button-filter"
          onClick={() => setCategory("clothes")}
        >
          Clothes
        </button>

        <button
          className="button-filter"
          onClick={() => setCategory("accessories")}
        >
          Accessories
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
