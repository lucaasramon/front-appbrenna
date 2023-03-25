import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../../server/api";
import "../../../App.css";

function CadastroUsuario() {
  const history = useHistory();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [idade, setIdade] = useState("");
  const [numero, setNumero] = useState("");
  const [numeroEmergencia, setNumeroEmergencia] = useState("");
  const [senha, setSenha] = useState("");
  const [, setAllUsuario] = useState([]);

  function toBack(e) {
    e.preventDefault();
    window.history.back();
  }
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

      history.push("/Usuario");
    }
  }

  //Função que pega todos os usuarios do banco
  useEffect(() => {
    async function verificarUsuario() {
      const response = await api.get("/usuarios");
      setAllUsuario(response.data);
    }
    verificarUsuario();
  }, []);

  return (
    <>
      <div class="container z-depth-1 subpages collection  cardFiltro">
        <div className="row ">
          <div className="col s12 pad-0">
            <h5 className="bot-20 sec-tit">Cadastro de Usuarios</h5>
          </div>
        </div>
        <form onSubmit={NovoCadastroSubmit}>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                id="name3"
                type="text"
                className="validate"
              />
              <label class="active" for="name3">
                Nome
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email3"
                type="email"
                className="validate"
              />
              <label class="active" for="email3">
                E-mail
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                id="email3"
                type="text"
                className="validate"
              />
              <label class="active" for="email3">
                Endereço
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                id="email3"
                type="text"
                className="validate"
              />
              <label class="active" for="email3">
                Idade
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                id="phone3"
                type="tel"
                className="validate"
              />
              <label class="active" for="phone3">
                Celular
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                value={numeroEmergencia}
                onChange={(e) => setNumeroEmergencia(e.target.value)}
                id="phone3"
                type="tel"
                className="validate"
              />
              <label class="active" for="phone3">
                Contato de emergência
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input id="pass3" type="password" className="validate" />
              <label class="active" for="pass3">
                Senha
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                id="pass3"
                type="password"
                className="validate"
              />
              <label class="active" for="pass3">
                Repita sua senha
              </label>
            </div>
          </div>

          <div className="row grupoBotao">
            <div>
              <button
                type="submit"
                className="waves-effect waves-light btn bg-primary"
              >
                Salvar
              </button>
            </div>
            <div className="modal-footer">
              <button
                onClick={toBack}
                className="waves-effect waves-light btn brown lighten-2 btnVoltar"
              >
                Voltar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CadastroUsuario;
