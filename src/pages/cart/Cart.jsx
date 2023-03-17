import React from "react";
import Header from "../../components/navbar/HeaderSettings";
import "./Cart.css";
import { BiCartAlt } from "react-icons/bi";

function Cart() {
  return (
    <React.Fragment>
      <Header />
      <div className="cartcontainer">
        <div className="carts">
          <div className="productimg"></div>
          <div className="cartinfo">
            <h2>KAYTEE усан гахайн хоол</h2>
            <p>
              Хэмжээ: 2.5кг <br /> Хэрэглээ: Өдөрт 2 удаа <br /> Хадгалах
              хугацаа: Задалснаас хойш сэрүүн хуурай орчинд 12 сар хадгална.
            </p>
            <div className="cartbuttons">
              <button className="buybutton">Захиалах</button>
              <button className="addcartbtn">
                <div className="cartbtncontainer">
                  <BiCartAlt className="addcart" />
                  Сагснаас хасах
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="carts">
          <div className="productimg"></div>
          <div className="cartinfo">
            <h2>KAYTEE усан гахайн хоол</h2>
            <p>
              Хэмжээ: 2.5кг <br /> Хэрэглээ: Өдөрт 2 удаа <br /> Хадгалах
              хугацаа: Задалснаас хойш сэрүүн хуурай орчинд 12 сар хадгална.
            </p>
            <div className="cartbuttons">
              <button className="buybutton">Захиалах</button>
              <button className="addcartbtn">
                <div className="cartbtncontainer">
                  <BiCartAlt className="addcart" />
                  Сагсанд нэмэх
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="carts">
          <div className="productimg"></div>
          <div className="cartinfo">
            <h2>KAYTEE усан гахайн хоол</h2>
            <p>
              Хэмжээ: 2.5кг <br /> Хэрэглээ: Өдөрт 2 удаа <br /> Хадгалах
              хугацаа: Задалснаас хойш сэрүүн хуурай орчинд 12 сар хадгална.
            </p>
            <div className="cartbuttons">
              <button className="buybutton">Захиалах</button>
              <button className="addcartbtn">
                <div className="cartbtncontainer">
                  <BiCartAlt className="addcart" />
                  Сагсанд нэмэх
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cart;
