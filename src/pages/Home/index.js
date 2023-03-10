import React from "react";
import "../../App.css";
import MenusFixos from "..";
import MenusLateral from "./MenuLateral/menuLateral";

function Home() {
  return (
    <>
    <MenusLateral />
    <div className="App">
      <MenusFixos />
    </div>
    </>
  );
}

export default Home;
