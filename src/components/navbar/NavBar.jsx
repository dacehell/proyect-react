import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navBar.css";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="https://image.flaticon.com/icons/png/512/1818/1818782.png"
            width="60px"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0 navbar__links">
            <li className="nav-item ">
              <NavLink
                exact
                activeClassName="my-active"
                className="navbar-brand"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item ">
              <NavLink
                exact
                activeClassName="my-active"
                className="navbar-brand"
                to="/createProduct"
              >
                Create
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                exact
                activeClassName="my-active"
                className="navbar-brand"
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav navbar__links ms-auto">
            <li>
              <Link to="/cart" className="cart__link">
                <i className="fas fa-shopping-cart"></i>
                <span>
                  <span className="cartlogo__badge">0</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
