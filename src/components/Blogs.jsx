import React from "react";
import "./index.css";
import Img1 from "../assets/blog-2.jpg";
import Img2 from "../assets/blog-1.jpg";
import Img3 from "../assets/blog-3.jpg";

const Blogs = () => {
  return (
    <div>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          {" "}
          our <span>blogs</span>{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <div class="image">
              <img src={Img1} alt="" />
            </div>
            <div class="content">
              <div class="icon">
                <a href="#">
                  {" "}
                  <i class="fas fa-calendar"></i> 1st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i class="fas fa-user"></i> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, eius.
              </p>
              <a href="#" class="btn">
                {" "}
                learn more
              </a>
            </div>
          </div>

          <div class="box">
            <div class="image">
              <img src={Img2} alt="" />
            </div>
            <div class="content">
              <div class="icon">
                <a href="#">
                  {" "}
                  <i class="fas fa-calendar"></i> 1st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i class="fas fa-user"></i> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, eius.
              </p>
              <a href="#" class="btn">
                {" "}
                learn more
              </a>
            </div>
          </div>

          <div class="box">
            <div class="image">
              <img src={Img3} alt="" />
            </div>
            <div class="content">
              <div class="icon">
                <a href="#">
                  {" "}
                  <i class="fas fa-calendar"></i> 1st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i class="fas fa-user"></i> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, eius.
              </p>
              <a href="#" class="btn">
                {" "}
                learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
