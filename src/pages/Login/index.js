import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../../server/api";
import "../../App.css";
import { AuthContext } from "../../contexts/authContext";

function Login() {

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [usuariosAll, setUsuarios] = useState([]);
  const { setUserAdm, userAdm} = useContext(AuthContext);  

  const getUsuarios = async () => {
    try {      
      const response = await api.get("/usuario");
      const data = response.data; 
      setUsuarios(data);

    } catch (error) {
      console.log(error);
    }
};

useEffect(() => {    
  getUsuarios();    
},[]);

  function verificarUsuario(e) {
    e.preventDefault();

    let inputEmail = email;
    let inputSenha = senha;
        
    let data = Array.isArray(usuariosAll) 
      ? usuariosAll.filter(function (e) {return e.email === inputEmail && e.senha === inputSenha}) 
      : [];
    console.log(data[0]);

    if (data[0]) {
      //configura se o usuário é admin para toda a aplicação
      data[0].isAdmin ? setUserAdm(true) : setUserAdm(false);

      localStorage.setItem('app-token',JSON.stringify(data[0]) )
      history.push("/Home");
    } else {
      alert("O E-mail ou senha está incorreto!");
    }
    
  }

  return (
    <>
      <div className="corFundoTela">

        <div class="login-bg access-login"></div>
        <div className=" container login-area">
          <div className="BoxLogoApp-login">
            <a ><i className="LogoApp-login"></i></a>
          </div>
          <div className="section">
            <h3 className="bot-20 center white-text">Login</h3>
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
                  <label class="active" for="email311">E-mail</label>
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
                  <label class="active" for="pass311">Senha</label>
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
                    <a href="ui-pages-register.html" className="waves-effect-btn">
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
