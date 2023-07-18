import React, { useState, useEffect } from "react";

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
        this.handlePriceClick = this.handlePriceClick.bind(this);
        this.state = {
            category: this.category,
            price: this.price

        }
    };
    handleCategoryClick(categoryType) {
        this.setState({category: categoryType});
    }

    handlePriceClick(categoryType) {
        console.log("categoryType", categoryType);
        this.setState({category: categoryType});
    }
    render() {
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
        </div>
        <div>
        {this.state.category === "accessories" ? <div> {this.props.products.filter(product => product.Category === 'accessories').map((filteredCategory, index) => (
        //     <div className="product" key={index}>
        //         <img
        //         className="main-img"
        //         src={`${filteredCategory.IMG}`}
        //         />
        //         <img
        //         className="hover-img"
        //         src={`${filteredCategory.HoverImg}`}
        //         alt="productHoverImg"
        //         />
        //         <h4>{filteredCategory.Name}</h4>
        //         <span>{filteredCategory.Category}</span>
        //         <p className="description">{filteredCategory.Description}</p>
        //         <span className="price">${filteredCategory.Price}</span>
        //         <div
        //         dangerouslySetInnerHTML={{ __html: filteredCategory.Reviews }}
        //         ></div>
        //         <input
        //         className="button purchase"
        //         type="button"
        //         value="Add to Bag"
        //         />
        //     </div>
        // ))}</div> : ""}  
    </div>
        );
    }
}

export default Filter;        