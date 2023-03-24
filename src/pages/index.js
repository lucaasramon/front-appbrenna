import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function menuFixo() {
  return (
    <div className="App">
      
      <a class="acesso-mvp-topo">App da Igreja Cristã Despertar para controle de rifas.
      </a>
      <h1 class="page-title" data-gtm-vis-recent-on-screen-6296301_541="415" 
      data-gtm-vis-first-on-screen-6296301_541="415" data-gtm-vis-total-visible-time-6296301_541="100" 
      data-gtm-vis-has-fired-6296301_541="1">Projeto: #AquisiçãodaSedeICD</h1>

      <h2 class="page-description">“Dele todo o corpo, ajustado e unido pelo auxílio de todas as juntas, cresce e edifica-se a si mesmo em amor, na medida em que cada parte realiza a sua função.” (Efésios 4:16)</h2>

      <div className="backtotop">
        <button href="#" className="btn-floating btn primary-bg">
          <i className="mdi mdi-chevron-up"></i>
        </button>
      </div>
      <div className="footer-menu circular">
        <ul>          
        <Link to="/Gerenciar-rifas">
            <li>
              <a >
                {' '}
                <i className="mdi mdi-open-in-app"></i>
                <span>Gerenciar Rifas</span>
              </a>
            </li>
          </Link>
          <Link to="/Usuarios">
            <li>
              <a href="sub-pages.html">
                {" "}
                <i className="mdi mdi-account-edit"></i>
                <span>Usuarios</span>
              </a>
            </li>
          </Link>
          <Link to="/Home">
            <li>
              <a href="sub-home.html">
                {" "}
                <i className="mdi mdi-home-outline"></i>
                <span>Home</span>
              </a>
            </li>
          </Link>
          <Link to="/Equipes">
            <li>
              <a href="sub-components.html">
                {" "}
                <i className="mdi mdi-flask-outline"></i>
                <span>Equipes</span>
              </a>
            </li>
          </Link>

          <Link to="/ConsultaBilhetes">
          <li>
              {" "}
              <i className="mdi mdi-view-dashboard"></i>
              <span>Consulta Bilhetes</span>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default menuFixo;
