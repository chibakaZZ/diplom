import React from "react";
import "./Rabbit.css";
import { Link } from "react-router-dom";

const Pets = () => {
  return (
    <div className="pets">
      <div className="pet1">
        <h2>Туулай </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus,
          quos! Laudantium eos exercitationem officia nostrum ut eligendi? Illo
          nesciunt ullam, mollitia earum ipsa ea eos consequuntur id voluptates
          esse dignissimos.
        </p>
        <button className="cart">
          <Link className="signinlink" to={"/about"}>
            Зөвлөгөө авах
          </Link>
        </button>
        <button className="cart">
          {" "}
          <Link className="signinlink" to={"/products"}>
            Хоол захиалах
          </Link>
        </button>
      </div>
      <div className="pet2"></div>
    </div>
  );
};

export default Pets;
