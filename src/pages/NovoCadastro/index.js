import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../server/api";
// import $ from 'jquery';
import "../../App.css";

function NovoCadastro() {
  const history = useHistory();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [idade, setIdade] = useState("");
  const [numero, setNumero] = useState("");
  const [numeroEmergencia, setNumeroEmergencia] = useState("");
  const [senha, setSenha] = useState("");
  const [,setAllUsuario] = useState([]);


  // Função que captura os valores do input e salva no banco.
  async function NovoCadastroSubmit(e) {
    e.preventDefault();

    if (
      nome === "" ||
      email === "" ||
      endereco === "" ||
      idade === "" ||
      numero === "" ||
      numeroEmergencia === "" ||
      senha === ""
    ) {
      alert("Tem um campo vazio");
    } else {
      await api.post("/usuario", {
        nome,
        email,
        endereco,
        idade,
        numero,
        numeroEmergencia,
        senha,
        priority: false,
      });
      alert("Cadastro realizado com sucesso!");

      // Limpa os campos preenchidos
      setNome("");
      setEmail("");
      setEndereco("");
      setIdade("");
      setNumero("");
      setNumeroEmergencia("");
      setSenha("");

      history.push("/");
    }
  }

  //Função que pega todos os usuarios do banco
  useEffect(() => {
    async function verificarUsuario() {
      const response = await api.get("/usuario");
      setAllUsuario(response.data);
    }
    verificarUsuario();
  }, []);

  return (
    <>
      <div className="login-bg access-login"></div>
      <div className="container login-area">
        <div className="section">
          <h3 className="bot-20 center white-text">Registrar</h3>
          <form onSubmit={NovoCadastroSubmit}>
            <div className="row">
              <div className="input-field col s10 offset-s1">
                <input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  id="name3"
                  type="text"
                  className="validate"
                />
                <label for="name3">Nome</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s10 offset-s1">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email3"
                  type="email"
                  className="validate"
                />
                <label for="email3">E-mail</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s10 offset-s1">
                <input
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  id="email3"
                  type="text"
                  className="validate"
                />
                <label for="email3">Endereço</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s10 offset-s1">
                <input
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                  id="email3"
                  type="text"
                  className="validate"
                />
                <label for="email3">Idade</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s10 offset-s1">
                <input
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  id="phone3"
                  type="tel"
                  className="validate"
                />
                <label for="phone3">Número</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s10 offset-s1">
                <input
                  value={numeroEmergencia}
                  onChange={(e) => setNumeroEmergencia(e.target.value)}
                  id="phone3"
                  type="tel"
                  className="validate"
                />
                <label for="phone3">Contato de emergência</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s10 offset-s1">
                <input id="pass3" type="password" className="validate" />
                <label for="pass3">Senha</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s10 offset-s1">
                <input
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  id="pass3"
                  type="password"
                  className="validate"
                />
                <label for="pass3">Repita sua senha</label>
              </div>
            </div>

            <div className="row center">
              <button
                type="submit"
                className="waves-effect waves-light btn-large bg-primary"
              >
                Salvar
              </button>
              <div className="spacer"></div>
              <div className="links">
                <Link to="/">
                  <a href="ui-pages-login.html" className="waves-effect">
                    Login
                  </a>{" "}
                </Link>{" "}
              </div>
              <div className="spacer"></div>
              <div className="spacer"></div>
              <div className="spacer"></div>
              <div className="spacer"></div>
              <div className="spacer"></div>
              <div className="spacer"></div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default NovoCadastro;
