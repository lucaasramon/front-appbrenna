import React, { Component, useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../../server/api";
import "../../App.css";

function Login() {

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function verificarUsuario(e) {
    e.preventDefault();

    let inputEmail = email;
    let inputSenha = senha;

    const response = await api.get("/usuario");

    function filtro(element) {
      if (
        element.email === inputEmail &&
        element.senha === inputSenha &&
        element.priority === false
      ) {
        return element;
      }
    }

    let data = response.data.filter(filtro);

    if (data[0]) {
      console.log("data[0]",data[0])

      localStorage.setItem('app-token',JSON.stringify(data[0]) )
      history.push("/Home");
    } else {
      alert("O E-mail ou senha está incorreto");
    }
    
  }

  return (
    <>
      <div className="corFundoTela">
        <div class="login-bg access-login"></div>
        <div className=" container login-area">
          <div className="section">
            <h3 className="bot-20 center white-text">Faça Login</h3>
            <form>
              <div className="row">
                <div className="input-field col s10 offset-s1">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email311"
                    type="email"
                    className="validate"
                  />
                  <label for="email311">E-mail</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s10 offset-s1">
                  <input
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    id="pass311"
                    type="password"
                    className="validate"
                  />
                  <label for="pass311">Senha</label>
                </div>
              </div>
              <div className="row center">
                <button
                  onClick={verificarUsuario}
                  type="submit"
                  className="waves-effect waves-light btn-large bg-primary"
                >
                  Entrar
                </button>
                <div className="spacer"></div>
                <div className="links">
                  {/* <Link to="/ResetSenha"><a href="" className='waves-effect'>Esqueceu sua senha?</a></Link> <span
                                        className="sep">|</span> */}
                  <Link to="/NovoCadastro">
                    <a href="ui-pages-register.html" className="waves-effect">
                      Novo Cadastro
                    </a>
                  </Link>
                </div>
                <div className="spacer"></div>
                <div className="spacer"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
