import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="top-header">
          <div className="container ">
            <div className="row align-items-center ">
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 left-nav">
                <ul>
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li className="nobdr">
                    <a href="#">Feedback</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-9 col-lg-9 top-right-nav">
                <ul>
                  <li>
                    <a href="#" className="hide">
                      Skip to Main Content
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hide">
                      Screen Reader Access{" "}
                    </a>
                  </li>
                  <li className="text-size">
                    <a className="pt-1" href="#">
                      A -
                    </a>
                    <a className="pt-1 " href="#">
                      A
                    </a>
                    <a className="pt-1" href="#">
                      A+
                    </a>
                    <a href="#" className="whitebg p-1">
                      A
                    </a>
                    <a href="#" className="blackbg p-1">
                      A
                    </a>
                  </li>
                  <li className="login-btn nobdr lang">
                    <select>
                      <option>English</option>
                      <option>Eng</option>
                      <option>Hin</option>
                    </select>
                  </li>
                  <li className="search-btn">
                    <a href="#">
                      <span className="mdi mdi-magnify"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="logo-sec-wraper">
          <div className="container">
            <div className="row d-flex justify-content-between flex-wrap align-items-center">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 logo-sec">
                <a href="#" className="wow zoomIn">
                  <img src="images/logo.jpg" alt="Logo" />
                </a>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-9 menu-sec">
                <div className="logo-sec-wraper">
                  <div className="d-flex justify-content-start">
                    <nav className="navbar navbar-expand-lg p-0">
                      <button
                        className="navbar-toggler navbar-toggler-right collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navb"
                        aria-expanded="false"
                      >
                        {" "}
                        <i className="fas fa-bars"></i>{" "}
                      </button>
                      <div className="navbar-collapse collapse" id="navb">
                        <ul className="navbar-nav ">
                          <NavLink className="nav-item" to={"/"}>
                            <span>Home</span>
                          </NavLink>

                          <NavLink className="nav-item" to={"/about"}>
                            <span>About Us</span>
                          </NavLink>
                          <NavLink
                            className="nav-item"
                            to={"/underdevelopment"}
                          >
                            <span>Menu 2</span>
                          </NavLink>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
