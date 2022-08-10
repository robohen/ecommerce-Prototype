import React, { Component } from "react";

export default class Product extends Component {
  // the card and card body are part of the bootstrap library line 5,6

  constructor(props) {
    super(props);

    console.log("Constructor - Product");

    this.state = {
      product: this.props.product,
    };
  }

  //state={                                        // can initialize state in this manner as well passing down state.property instead of using props
  // product: this.props.product
  //};//

  render() {
    //console.log("render - Product");
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">
              # {this.state.product.id}
              {/*delete button starts */}
              <span
                className="pull-right hand-icon"
                onClick={() => {
                  this.props.onDelete(this.state.product);
                }}
              >
                <i className="fa fa-times"></i>
              </span>
              {/*delete button ends*/}
            </div>

            <h5 className="pt-2 border-top">
              {this.state.product.productName}
            </h5>
            <div>$ {this.state.product.price}</div>
          </div>
          {/*card body ends here*/}
          <div className="card-footer text-right">
            <div className="float-left">
              <span className="badge">{this.state.product.quantity}</span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product);
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrement(this.state.product);
                  }}
                >
                  -
                </button>{" "}
                {/* the nubmer after the product stands for how much are present */}
              </div>
            </div>
            {/*float left ends here */}
            <div className="float-right">{this.props.children}</div>

            {/*card-footer ends here */}
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    //console.log("componentDid - Product");
  }
  componentDidUpdate() {
    // console.log("componentDid - Product");
  }

  //render ends here

  //Executes when the current instance of current component is being deleted from memory
  componentWillUnmount() {
    //  console.log(" componentWillUnmount - ShoppingCart");
  }
}
