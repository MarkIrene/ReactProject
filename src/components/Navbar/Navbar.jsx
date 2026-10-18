import { Link } from "react-router-dom";
import "./Navbar.css";
// import logo from "../../assets/logo.jpg";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ fontWeight: 50 }}>
            W|S
            {/* <img
              src={logo}
              alt="Joshua Walker Used Cars"
              className="navbarLogo"
            /> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/vehicles">
                Vehicles
              </Link>
              <Link className="nav-link" to="/Company">
                Company
              </Link>
              <Link className="nav-link" href="#">
                Contact
              </Link>
              <a className="nav-link" href="#">
                Career
              </a>
            </div>
          </div>
          <Link className="btnSignIn" type="submit" to="/Login">
            Sign In
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
