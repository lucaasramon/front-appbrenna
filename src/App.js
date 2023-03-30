import "./App.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./mdi/materialdesignicons.min.css";
import "react-fancybox/lib/fancybox.css";
import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { AuthContext } from "./contexts/authContext";

function App() {
  const userAdm = useContext(AuthContext);
  console.log(userAdm);
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
