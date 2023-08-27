import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
     <div className="home">
     

      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div>
  );
}

export default Home;
