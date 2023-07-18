import React from "react";
import ProductsCard from "./Cards";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.handleCatergoryClick = this.handleCatergoryClick.bind(this);
    this.handlePriceClick = this.handlePriceClick.bind(this);
    this.state = {
      catergory: this.catergory,
      price: this.price,
      products: [] // Add products state
    };
  }

  componentDidMount() {
    // Fetch products data and update state
    this.fetchProducts();
  }

  fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8000/gear");
      const data = await response.json();
      if (data) {
        this.setState({ products: data });
      }
      console.log("data: ", data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  handleCategoryClick(catergoryType) {
    this.setState({ catergory: catergoryType });
  }

  handlePriceClick(catergoryType) {
    console.log("categoryType", catergoryType);
    this.setState({ catergory: catergoryType });
  }

  render() {
    const { products } = this.state; // Get products from state

    return (
      <div className="filtered-items">
        <div className="button-container">
          <button
            className="button-filter"
            onClick={() => this.handleCategoryClick("juice")}
          >
            Supplements
          </button>

          <button
            className="button-filter"
            onClick={() => this.handleCategoryClick("gymgear")}
          >
            Gym Gear
          </button>

          <button
            className="button-filter"
            onClick={() => this.handleCategoryClick("clothes")}
          >
            Clothes
          </button>

          <button
            className="button-filter"
            onClick={() => this.handleCategoryClick("accessories")}
          >
            Accessories
          </button>
        </div>

        <div>
          {this.state.category === "accessories" ? (
            <div>
              {products
                .filter((product) => product.Catergory === "accessories")
                .map((filteredCatergory, index) => (
                  <ProductsCard key={index} gear={filteredCatergory} />
                ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Filter;
