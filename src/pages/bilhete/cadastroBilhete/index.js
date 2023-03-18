import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../../server/api";
import "../../../App.css";

function CadastroBilhete() {
  const history = useHistory();
  const [rifa, setNome] = useState("");
  const [valorBilhete, setEmail] = useState("");
  const [equipe, setEndereco] = useState("");
  const [numeroBilhete, setIdade] = useState("");
  const [meioPagamento, setNumero] = useState("");
  const [responsavelVenda, setNumeroEmergencia] = useState("");
  const [dataVenda, setSenha] = useState("");
  const [, setAllUsuario] = useState([]);

  function toBack(e) {
    e.preventDefault();
    window.history.back();
  }
  // Função que captura os valores do input e salva no banco.
  async function NovoCadastroSubmit(e) {
    e.preventDefault();

    if (
      rifa === "" ||
      valorBilhete === "" ||
      equipe === "" ||
      numeroBilhete === "" ||
      meioPagamento === "" ||
      responsavelVenda === "" ||
      dataVenda === ""
    ) {
      alert("Tem um campo vazio");
    } else {
      await api.post("/bilhetes", {
        rifa,
        valorBilhete,
        equipe,
        numeroBilhete,
        meioPagamento,
        responsavelVenda,
        dataVenda,
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

      history.push("/bilhetes");
    }
  }

  //Função que pega todos os usuarios do banco
  useEffect(() => {
    async function verificarUsuario() {
      const response = await api.get("/bilhetes");
      setAllUsuario(response.data);
    }
    verificarUsuario();
  }, []);

  return (
    <>
      <div class="container z-depth-1 subpages collection  cardFiltro">
        <div className="row ">
          <div className="col s12 pad-0">
            <h5 className="bot-20 sec-tit">Baixa de Bilhete</h5>
          </div>
        </div>
        <form onSubmit={NovoCadastroSubmit}>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                value={rifa}
                onChange={(e) => setNome(e.target.value)}
                id="name3"
                type="text"
                className="validate"
              />
              <label class="active" for="name3">
                Rifa
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                value={valorBilhete}
                onChange={(e) => setEmail(e.target.value)}
                id="email3"
                type="email"
                className="validate"
              />
              <label class="active" for="email3">
                Valor do bilhete
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                value={equipe}
                onChange={(e) => setEndereco(e.target.value)}
                id="email3"
                type="text"
                className="validate"
              />
              <label class="active" for="email3">
                Equipe
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                value={numeroBilhete}
                onChange={(e) => setIdade(e.target.value)}
                id="email3"
                type="text"
                className="validate"
              />
              <label class="active" for="email3">
                Número do bilhete
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                value={meioPagamento}
                onChange={(e) => setNumero(e.target.value)}
                id="phone3"
                type="tel"
                className="validate"
              />
              <label class="active" for="phone3">
                Meio de Pagamento
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                value={responsavelVenda}
                onChange={(e) => setNumeroEmergencia(e.target.value)}
                id="phone3"
                type="tel"
                className="validate"
              />
              <label class="active" for="phone3">
                Responsável pela venda
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input id="pass3" type="password" className="validate" />
              <label class="active" for="pass3">
                Identificação do pagamento
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                value={dataVenda}
                onChange={(e) => setSenha(e.target.value)}
                id="pass3"
                type="password"
                className="validate"
              />
              <label class="active" for="pass3">
                Data de venda
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

export default CadastroBilhete;
