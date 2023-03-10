import React from "react";
import { useHistory } from "react-router-dom";

import "../../../App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

function MenuLateral(){
  
  const history = useHistory();

    function exitUser(){
      localStorage.removeItem('app-token' )
      history.push("/");
    }
    return (
      <>
        <nav
          className="fix_topscroll logo_on_fixed  topbar navigation"
          role="navigation"
        >
          <div className="nav-wrapper container">
            <a
              href="{}"
              data-target=""
              className="waves-effect waves-circle navicon back-button htmlmode show-on-large "
            >
              <i className="mdi mdi-arrow-left" data-page=""></i>
            </a>

            <a
              href="{}"
              data-target="slide-nav"
              className="waves-effect waves-circle navicon sidenav-trigger show-on-large"
            >
              <i className="mdi mdi-menu"></i>
            </a>

            <a
              href="{}"
              data-target="slide-settings"
              className="waves-effect waves-circle navicon right sidenav-trigger show-on-large pulse"
            >
              <i className="mdi mdi-settings-outline"></i>
            </a>

            <button
              onClick={exitUser}
              className="waves-effect waves-circle navicon right nav-site-mode show-on-large UserExite"
            >
              <i className="mdi mdi-power mdi-transition1"></i>
            </button>
          </div>
        </nav>
        <ul id="slide-nav" className="sidenav sidemenu">
          <li className="menu-close">
            <i className="mdi mdi-close"></i>
          </li>
          <li className="user-wrap">
            <div className="user-view row">
              <div className="col s9 infoarea">
                <a href="ui-app-profile.html">
                  <span className="name">Emma Bailey</span>
                </a>
                <a href="ui-app-profile.html">
                  <span className="email">emma.bailey@gmail.com</span>
                </a>
              </div>
            </div>
          </li>

          <li className="menulinks">
            <ul className="collapsible"></ul>

            <li className="sh-wrap">
              <div className="subheader">Navigation</div>
            </li>
            <li className="lvl1 ">
              <div className=" waves-effect ">
                <a href="sub-home.html">
                  <i className="mdi mdi-home-outline"></i>
                  <span className="title">Home Pages</span>
                </a>
              </div>
            </li>
            <li className="lvl1 ">
              <div className=" waves-effect ">
                <a href="ui-apps.html">
                  <i className="mdi mdi-arrange-send-to-back"></i>
                  <span className="title">Apps</span>
                </a>
              </div>
            </li>
            <li className="lvl1 ">
              <div className=" waves-effect ">
                <a href="sub-components.html">
                  <i className="mdi mdi-flask-outline"></i>
                  <span className="title">Components</span>
                </a>
              </div>
            </li>
            <li className="lvl1 ">
              <div className=" waves-effect ">
                <a href="sub-pages.html">
                  <i className="mdi mdi-palette-swatch"></i>
                  <span className="title">Pages</span>
                </a>
              </div>
            </li>
            <li className="lvl1 ">
              <div className=" waves-effect ">
                <a href="sub-gallery.html">
                  <i className="mdi mdi-view-dashboard"></i>
                  <span className="title">Gallery</span>
                </a>
              </div>
            </li>
            <li className="lvl1 ">
              <div className=" waves-effect ">
                <a href="sub-forms.html">
                  <i className="mdi mdi-textbox"></i>
                  <span className="title">Forms</span>
                </a>
              </div>
            </li>
            <li className="lvl1 ">
              <div className=" waves-effect ">
                <a href="sub-charts.html">
                  <i className="mdi mdi-chart-bubble"></i>
                  <span className="title">Charts</span>
                </a>
              </div>
            </li>
            <li className="lvl1 ">
              <div className="waves-effect ">
                <a
                  href="{}"
                  data-target="slide-settings"
                  className="sidenav-trigger"
                >
                  <i className="mdi mdi-settings-outline"></i>
                  <span className="title">Settings</span>{" "}
                </a>
              </div>
            </li>
            <li className="sep-wrap">
              <div className="divider"></div>
            </li>
            <li className="sh-wrap">
              <div className="subheader">Prebuilt Apps</div>
            </li>
            <li className="lvl1 ">
              <div className=" waves-effect ">
                <a href="sub-apps-socialmedia.html">
                  <i className="mdi mdi-account-network"></i>
                  <span className="title">Social Media App</span>
                </a>
              </div>
            </li>
            <li className="lvl1 ">
              <div className=" waves-effect ">
                <a href="sub-apps-ecommerce.html">
                  <i className="mdi mdi-cart-outline"></i>
                  <span className="title">Ecommerce App</span>
                </a>
              </div>
            </li>
            <li className="lvl1 ">
              <div className=" waves-effect ">
                <a href="sub-apps-blog.html">
                  <i className="mdi mdi-square-edit-outline"></i>
                  <span className="title">Blog App</span>
                </a>
              </div>
            </li>
            <li className="lvl1 ">
              <div className=" waves-effect ">
                <a href="sub-apps-portfolio.html">
                  <i className="mdi mdi-widgets   "></i>
                  <span className="title">Portfolio App</span>
                </a>
              </div>
            </li>
            <li className="lvl1 ">
              <div className=" waves-effect ">
                <a href="sub-apps-news.html">
                  <i className="mdi mdi-newspaper"></i>
                  <span className="title">News App</span>
                </a>
              </div>
            </li>
            <li className="lvl1 ">
              <div className=" waves-effect ">
                <a href="sub-apps-events.html">
                  <i className="mdi mdi-movie-roll"></i>
                  <span className="title">Events App</span>
                </a>
              </div>
            </li>
            <li className="lvl1 ">
              <div className=" waves-effect ">
                <a href="sub-apps-courses.html">
                  <i className="mdi mdi-school"></i>
                  <span className="title">Online Courses App</span>
                </a>
              </div>
            </li>
            <li className="lvl1 ">
              <div className=" waves-effect ">
                <a href="sub-apps-university.html">
                  <i className="mdi mdi-certificate"></i>
                  <span className="title">University App</span>
                </a>
              </div>
            </li>
            <li className="lvl1 ">
              <div className=" waves-effect ">
                <a href="sub-apps-chat.html">
                  <i className="mdi mdi-message-outline"></i>
                  <span className="title">Chat & Messages App</span>
                </a>
              </div>
            </li>
            <li className="lvl1 ">
              <div className=" waves-effect ">
                <a href="sub-apps-mailbox.html">
                  <i className="mdi mdi-email-variant"></i>
                  <span className="title">Mailbox App</span>
                </a>
              </div>
            </li>
            <li className="lvl1 ">
              <div className=" waves-effect ">
                <a href="sub-apps-contacts.html">
                  <i className="mdi mdi-contacts"></i>
                  <span className="title">Contacts App</span>
                </a>
              </div>
            </li>
            <li className="lvl1 ">
              <div className=" waves-effect ">
                <a href="sub-apps-wallet.html">
                  <i className="mdi mdi-wallet"></i>
                  <span className="title">Payment & Wallet App</span>
                </a>
              </div>
            </li>
            <li className="sep-wrap">
              <div className="divider"></div>
            </li>
            <li className="sh-wrap">
              <div className="subheader">Get in Touch</div>
            </li>
            <li className="lvl1 ">
              <div className="waves-effect ">
                <a href="mailto:email@example.com">
                  <i className="mdi mdi-email-outline"></i>
                  <span className="title">Email</span>{" "}
                </a>
              </div>
            </li>
            <li className="lvl1 ">
              <div className="waves-effect ">
                <a href="tel:+1 234 567 890">
                  <i className="mdi mdi-cellphone-basic"></i>
                  <span className="title">Phone</span>{" "}
                </a>
              </div>
            </li>
            <li className="lvl1 ">
              <div className="waves-effect ">
                <a href="sms:+1 234 567 890">
                  <i className="mdi mdi-message-text-outline"></i>
                  <span className="title">Message</span>{" "}
                </a>
              </div>
            </li>
          </li>
        </ul>
      </>
    );
  
}

export default MenuLateral;