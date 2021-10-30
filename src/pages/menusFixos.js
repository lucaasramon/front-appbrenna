import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../App.css';


export default () => {

  return (
    
    <div className="App">


      <footer className="page-footer center social-colored ">
        <div className="container footer-content">
          <div className="row">
            <div className="">
              <h5 className="logo">Brenna Medeiros</h5>
              <p className="text">Te ajudo a ressignificar sua historia!</p>
            </div>
            <div className="link-wrap">

              <ul className="social-wrap">
                <li className="social">
                  <a className="" href="https://www.instagram.com/brennamedeirospsi/"><i className="mdi mdi-instagram"></i></a>
                  <a className="" href="https://www.youtube.com/channel/UC6WO-1brse7XvAOU-ghpREQ"><i className="mdi mdi-youtube"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container">
            &copy; Copyright <a className="" href="https://themeforest.net/user/themepassion/portfolio">Themepassion</a>. All
            rights reserved.
          </div>
        </div>
      </footer>
      <div className="backtotop">
        <a className="btn-floating btn primary-bg">
          <i className="mdi mdi-chevron-up"></i>
        </a>
      </div>
      <div className="footer-menu circular">
        <ul>
          <li>
            <a href="ui-apps.html"> <i className="mdi mdi-open-in-app"></i>
              <span>Apps</span>
            </a>
          </li>
          <Link to='/Usuarios'>
          <li>
            <a href="sub-pages.html"> <i className="mdi mdi-account-edit"></i>
              <span>Usuarios</span>
            </a>
          </li>
          </Link>
          <Link to='/Home'>
          <li>
            <a href="sub-home.html"> <i className="mdi mdi-home-outline"></i>
              <span>Home</span>
            </a>
          </li>
          </Link>
          <Link to='/ReestruturaçãoCognitiva'>
          <li>
            <a href="sub-components.html"> <i className="mdi mdi-flask-outline"></i>
              <span>Tarefas</span>
            </a>
          </li>
          </Link>

          <li>
            <a href="sub-gallery.html"> <i className="mdi mdi-view-dashboard"></i>
              <span>Gallery</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

