import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="container-fluid nav-bar bg-transparent">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
          <a
            href="index.html"
            className="navbar-brand d-flex align-items-center text-center"
          >
            <div className="icon p-2 me-2">
              <img
                className="img-fluid"
                src="./src/assets/img/icon-deal.png"
                alt="Icon"
                style={{ width: 30, height: 30 }}
              />
            </div>
            <h1 className="m-0 text-primary">RentHome</h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/properties" className="nav-item nav-link">
                Properties
              </Link>
              <Link to="/contact-us" className="nav-item nav-link">
                Contact
              </Link>
            </div>
            <a href="#" className="btn btn-primary px-3 d-none d-lg-flex">
              Add Property
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
