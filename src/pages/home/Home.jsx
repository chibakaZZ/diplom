import React from "react";
import "./Home.css";
import GuineaPig from "../../components/shorts/guineapig/GuineaPig";
import Rabbit from "../../components/shorts/rabbit/Rabbit";
import Hamster from "../../components/shorts/hamster/Hamster";
import Parrot from "../../components/shorts/parrot/Parrot";

function Home() {
  return (
    <React.Fragment>
      <div className="home">
        <h1 className="text">
          A true friends leaves <br />
          "Paw Prints" <br />
          on your heart
        </h1>
      </div>
      <div>
        <GuineaPig />
        <Rabbit />
        <Hamster />
        <Parrot />
      </div>
    </React.Fragment>
  );
}

export default Home;
