import React from "react";
import "./Hamster.css";
import { Link } from "react-router-dom";

function Newsletter() {
  return (
    <div className="newsletter">
      <div className="newsletter1"></div>
      <div className="newsletter2">
        <h2>Орог зусаг </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus,
          quos! Laudantium eos exercitationem officia nostrum ut eligendi? Illo
          nesciunt ullam, mollitia earum ipsa ea eos consequuntur id voluptates
          esse dignissimos.
        </p>
        <button className="cart">
          {" "}
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
    </div>
  );
}

export default Newsletter;
