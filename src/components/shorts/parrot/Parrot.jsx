import React from "react";
import "./Parrot.css";
import { Link } from "react-router-dom";

function parrot() {
  return (
    <div className="parrots">
      <div className="parrot1">
        <h2>Тоть </h2>
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
          <Link className="signinlink" to={"/products"}>
            Хоол захиалах
          </Link>
        </button>
      </div>
      <div className="parrot2"></div>
    </div>
  );
}

export default parrot;
