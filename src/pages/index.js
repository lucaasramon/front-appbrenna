import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function menuFixo() {
  return (
    <div className="App">
      <footer className="page-footer center social-colored "></footer>
      <div className="backtotop">
        <button href="#" className="btn-floating btn primary-bg">
          <i className="mdi mdi-chevron-up"></i>
        </button>
      </div>
      <div className="footer-menu circular">
        <ul>
          <Link to="/Gerenciar-rifas">
            <li>
              <a href="ui-apps.html">
                {' '}
                <i className="mdi mdi-open-in-app"></i>
                <span>Gerenciar Rifas</span>
              </a>
            </li>
          </Link>
          <Link to="/Usuarios">
            <li>
              <a href="sub-pages.html">
                {' '}
                <i className="mdi mdi-account-edit"></i>
                <span>Usuarios</span>
              </a>
            </li>
          </Link>
          <Link to="/Home">
            <li>
              <a href="sub-home.html">
                {' '}
                <i className="mdi mdi-home-outline"></i>
                <span>Home</span>
              </a>
            </li>
          </Link>
          <Link to="/Equipes">
            <li>
              <a href="sub-components.html">
                {' '}
                <i className="mdi mdi-flask-outline"></i>
                <span>Equipes</span>
              </a>
            </li>
          </Link>

          <li>
            <a href="sub-gallery.html">
              {' '}
              <i className="mdi mdi-view-dashboard"></i>
              <span>Gallery</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default menuFixo;
