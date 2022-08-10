import React, { Component } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import CustomersList from "./CustomersList";
import { Routes } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={<Login />}
            className="container-fluid"
          ></Route>

          <Route
            path="/dashboard"
            element={<Dashboard />}
            className="container-fluid"
          ></Route>

          <Route
            path="/customers"
            element={<CustomersList />}
            className="container-fluid"
          ></Route>

          <Route
            path="/cart"
            element={<ShoppingCart />}
            className="container-fluid"
          ></Route>

          <Route
            path="*"
            element={<NoMatchPage />}
            className="container-fluid"
          />
        </Routes>
      </Router>
    );
  }
}
