import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        {/* <div className="footer-top-slider">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="second-heading gradiant-heading third-heading">
                  <h6>Explore</h6>
                  <h2>Photo Gallery</h2>
                  <div className="underline"></div>
                </div>
              </div>
              <div className="col-auto p-1 mob-version-hide">
                <a href="#" className="btn cta_button">
                  View All
                </a>
              </div>
            </div>
          </div>
          <div
            id="footer-top-slider"
            className="owl-carousel owl-theme wow fadeInUp mt-3"
          >
            <a href="#">
              <img src="images/fg1.jpg" />
              <div className="footer-top-slider-details"></div>
            </a>
            <a href="#">
              <img src="images/fg2.jpg" />
              <div className="footer-top-slider-details"></div>
            </a>
            <a href="#">
              <img src="images/fg3.jpg" />
              <div className="footer-top-slider-details"></div>
            </a>
            <a href="#">
              <img src="images/fg4.jpg" />
              <div className="footer-top-slider-details"></div>
            </a>
            <a href="#">
              <img src="images/fg5.jpg" />
              <div className="footer-top-slider-details"></div>
            </a>
            <a href="#">
              <img src="images/fg6.jpg" />
              <div className="footer-top-slider-details"></div>
            </a>
          </div>
          <div className="mob-version-show">
            <a href="#" className="btn cta_button">
              View All
            </a>
          </div>
        </div> */}

        <div className="FooterLinks">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <img src="images/cqw.png" alt="CQW" />
                <img src="images/xhtml.png" alt="Xhtml" />
                <img src="images/w3css.png" alt="Xhtml" />
              </div>
              <div className="col-auto social-icon">
                <a href="javascript:void(0)">
                  <span className="mdi mdi-facebook"></span>
                </a>
                <a href="javascript:void(0)">
                  <span className="mdi mdi-twitter"></span>
                </a>
                <a href="javascript:void(0)">
                  <span className="mdi mdi-youtube"></span>
                </a>
                <a href="javascript:void(0)">
                  <span className="mdi mdi-share-variant"></span>
                </a>
              </div>
              <div className="col-auto">
                <img src="images/translate.jpg" alt="translate" />
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 co-sm-12 col-md-12 col-lg-9 footer-top-wrapper ">
                <ul>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Tenders</a>
                  </li>
                  <li>
                    <a href="#">RTI</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Archives</a>
                  </li>
                  <li>
                    <a href="#">Copyright Policy</a>
                  </li>
                  <li>
                    <a href="#">Hyperlinking Policy</a>
                  </li>
                  <li>
                    <a href="#">Accessibility</a>
                  </li>
                  <li>
                    <a href="#">Statement</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                </ul>
                <p>
                  Copyright © 2022. All rights reserved © Government of NCT of
                  Delhi
                </p>
              </div>
              <div className="col-12 co-sm-12 col-md-12 col-lg-3 text-right">
                <p>Page last updated on: 24/05/2022</p>
                <p>Visitors:n 1153853</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
