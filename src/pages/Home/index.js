import React, { Component } from "react";
import "../../App.css";
import MenusFixos from "../menusFixos";
import MenusLateral from "../menuLateral/menuLateral";

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
