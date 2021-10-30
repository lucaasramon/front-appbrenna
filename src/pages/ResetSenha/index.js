import React, { Component } from "react";
import { Link } from "react-router-dom";
// import $ from 'jquery';
import '../../App.css';


function ResetSenha() {

    return (
        <>

            <div class="login-bg access-login"></div>
                <div className="container login-area">
                    <div className="section">
                        <h3 className="bot-20 center white-text">Esqueceu a senha?</h3>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input id="email3" type="email" className="validate" />
                                <label for="email3">Email</label>
                            </div>
                        </div>
                        <div className="row center">
                            <a className="waves-effect waves-light btn-large bg-primary">Enviar</a>
                            <div className="spacer"></div>
                            <div className="links">
                               <Link to="/"><a href="ui-pages-login.html" className='waves-effect'>Login</a></Link>
                            </div>
                            <div className="spacer"></div>
                            <div className="spacer"></div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ResetSenha;