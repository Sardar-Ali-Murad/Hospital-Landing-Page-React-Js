import React from "react";
import "./index.css";
import Img1 from "../assets/home-img.svg";

const Home = () => {
  return (
    <div>
      <section class="home" id="home">
        <div class="image">
          <img src={Img1} alt="" />
        </div>

        <div class="content">
          <h3>stay safe, stay healthy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed
            autem vero? Magnam, est laboriosam!
          </p>
          <a href="#" class="btn">
            {" "}
            contact us{" "}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
