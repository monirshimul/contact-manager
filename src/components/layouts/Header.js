import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const { branding } = this.props;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-secondary mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            <h1>
              <i className="fab fa-pied-piper text-info" /> {branding}
            </h1>
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home text-info" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact/add" className="nav-link">
                  <i className="fas fa-plus text-info" /> Add
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="fas fa-question text-info" /> About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Header.defaultProps = {
  branding: "My App"
};
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
