import React from "react";
import "./index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  let [ham, setHam] = React.useState(true);
  return (
    <div className="nav">
      <div className="nav-main">
        <a href="#" class="logo" style={{ color: "white", fontSize: "20px" }}>
          {" "}
          <i class="fas fa-heartbeat"></i> medcare.{" "}
        </a>

        <nav className="big-screen-nav">
          <ul>
            <li>
              <a className="fancy-link" href="#home">
                HOME
              </a>
            </li>
            <li>
              <a className="fancy-link" href="#services">
                SERVICES
              </a>
            </li>
            <li>
              <a className="fancy-link" href="#about">
                ABOUT
              </a>
            </li>
            <li>
              <a className="fancy-link" href="#doctors">
                DOCTORS
              </a>
            </li>
            <li>
              <a className="fancy-link" href="#book">
                BOOK
              </a>
            </li>
            <li>
              <a className="fancy-link" href="#review">
                REVIEW
              </a>
            </li>
            <li>
              <a className="fancy-link" href="#blogs">
                BLOGS
              </a>
            </li>
          </ul>
        </nav>

        <GiHamburgerMenu
          className="ham"
          onClick={() => setHam(false)}
          style={{ color: "white" }}
        />
      </div>

      <div
        className={`smal-screen-nav ${!ham ? "small-screen-nav-active" : ""}`}
      >
        <AiOutlineClose
          onClick={() => setHam(true)}
          className="small-screen-close"
          style={{ color: "white" }}
        />
        <nav>
          <ul>
            <li>
              <a
                className="fancy-link"
                href="#home"
                onClick={() => setHam(true)}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                className="fancy-link"
                href="#services"
                onClick={() => setHam(true)}
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                className="fancy-link"
                href="#about"
                onClick={() => setHam(true)}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                className="fancy-link"
                href="#doctors"
                onClick={() => setHam(true)}
              >
                DOCTORS
              </a>
            </li>
            <li>
              <a
                className="fancy-link"
                href="#book"
                onClick={() => setHam(true)}
              >
                BOOK
              </a>
            </li>
            <li>
              <a
                className="fancy-link"
                href="#review"
                onClick={() => setHam(true)}
              >
                REVIEW
              </a>
            </li>
            <li>
              <a
                className="fancy-link"
                href="#blogs"
                onClick={() => setHam(true)}
              >
                BLOGS
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
