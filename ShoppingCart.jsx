import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
  //Executes when the component is mounted
  constructor(props) {
    super(props); //calling super class's constructor
    //initialization of the state only place u can initialize state using this.state
    this.state = {
      products: [],
    };
  }

  //this is a child component rendered onto the parent, the parents can pass props and content
  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  //render ends here

  //Executes after constructor and render method(includes life cycle of child components, if any) of current component
  componentDidMount = async () => {
    // fetch data from data source when the promise is resolved then the 2nd part activates
    var response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    var prods = await response.json();
    console.log(prods);

    this.setState({ products: prods });
  };

  //componentDidUpdate(prevProps, prevState){

  // console.log(
  //     "componentDidUpdate",
  //   prevProps,
  // prevState,
  //this.props,
  // this.state
  //);
  // if (prevProps != this.props.x) {
  //make http call
  //   };//

  //componentWillUnmount()
  //{
  //console.log(" componentWillUnmount - ShoppingCart");
  //}
  // componentDidCatch(error, info){
  //console.log("componentDidCatch - ShoppingCart");
  //console.log(error, info);

  //localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  //}//

  // these two will pass props for the buttons and execute when user clicks on + button
  handleIncrement = (product, maxValue) => {
    // gets the index of the selected product
    let allProducts = [...this.state.products]; // clones state.products w/o changing the original
    let index = allProducts.indexOf(product);

    if ((allProducts[index].quantity < maxValue, 100)) {
      allProducts[index].quantity++;
      //updates the state of current component(parent component)
      this.setState({ products: allProducts });
    }
  };
  // this one executes when the user clicks on - button
  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if ((allProducts[index].quantity >= minValue, 0)) {
      allProducts[index].quantity--;
      this.setState({ products: allProducts });
    }
  };

  //executes when the user clicks on the delete (X) button in the product component
  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure you want to delete?")) {
      //deletes the product based on index

      allProducts.splice(index, 1);
      //update the state of current
      this.setState({ products: allProducts });
    }
  };
}
