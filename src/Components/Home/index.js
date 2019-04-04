import React, { Component } from "react";
import logo from "../logo.svg";
class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="header bg-dark text-light" style={{ width: "100%" }}>
          LOGO
        </div>

        {/* Categoies Navbar */}
        <nav
          className="navbar navbar-dark bg-dark navbar-expand-lg"
          style={{ width: "100%" }}
        >
          <a className="navbar-brand" href="#">
            Categoies |
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Cars
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Watches
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Antiques
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Jewelery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Motorcycles
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Paintings
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="bd-example" style={{ width: "100%" }}>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselExampleCaptions" data-slide-to="1" />
              <li data-target="#carouselExampleCaptions" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={logo} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 style={{ color: "black" }}>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={logo} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={logo} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="product_list">
          {" "}
          <div class="card-group">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer bg-dark text-light"
          style={{ width: "100%", hight: 40 }}
        >
          i am non
        </div>
      </div>
    );
  }
}

export default Home;
