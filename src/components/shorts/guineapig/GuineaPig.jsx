import React from "react";
import "./GuineaPig.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services">
      <div className="service1"></div>
      <div className="service2">
        <div className="title">
          <h2>Усан гахай </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, quos! Laudantium eos exercitationem officia nostrum ut
            eligendi? Illo nesciunt ullam, mollitia earum ipsa ea eos
            consequuntur id voluptates esse dignissimos.
          </p>
          <button className="cart">
            <Link className="signinlink" to={"/about"}>
              Зөвлөгөө авах
            </Link>
          </button>
          <button className="cart">
            <Link className="signinlink" to={"/products"}>
              Хоол захиалах
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
