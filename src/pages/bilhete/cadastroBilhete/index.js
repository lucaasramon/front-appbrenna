import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../../server/api";
import "../../../App.css";

function CadastroBilhete() {
  const history = useHistory();
  const [rifa_id, setRifaId] = useState("");
  const [valorBilhete, setValorBilhete] = useState();
  const [equipe, setEquipe] = useState("");
  const [bilhete, setBilhete] = useState("");
  const [meioPagamento, setMeioPagamento] = useState("");
  const [responsavelVenda, setResponsavelVenda] = useState("");
  const [identificacaoPagamento, setIdentificacao] = useState("");
  const [dataVenda, setDataVenda] = useState("");
  const [rifaNome, setRifaNome] = useState("");
  const [quemComprou, setQuemComprou] = useState("");
  const [, setAllUsuario] = useState([]);

  function toBack(e) {
    e.preventDefault();
    window.history.back();
  }
  // Função que captura os valores do input e salva no banco.
  async function NovoCadastroSubmit(e) {
    e.preventDefault();

    if (
      rifa_id === "" ||
      quemComprou === "" ||
      identificacaoPagamento === "" ||
      valorBilhete === "" ||
      equipe === "" ||
      bilhete === "" ||
      meioPagamento === "" ||
      responsavelVenda === "" ||
      dataVenda === ""
    ) {
      alert("Tem um campo vazio");
    } else {

      let url = window.location.pathname;
      let parts = url.split("/");
      let lastPart = parts.pop() || parts.pop();
      await api.post(`/bilhetesUp/${lastPart}`, {
        rifa_id,
        rifaNome,
        bilhete,
        equipe,
        bilheteVenda: [
          {
            meioPagamento,
            responsavelVenda,
            identificacaoPagamento,
            dataVenda,
            quemComprou,
            valorBilhete,
          },
        ],
        status: true,
      });
      alert("Cadastro realizado com sucesso!");
      window.location.href = "/ConsultaBilhetes";

      history.push("/ConsultaBilhetes");
    }
  }

  //Função que pega todos os usuarios do banco
  useEffect(() => {
    async function verificarUsuario() {
      const response = await api.get("/bilhetes");
      setAllUsuario(response.data);
    }

    async function pegarParamURL() {
      let url = window.location.pathname;
      let parts = url.split("/");
      let lastPart = parts.pop() || parts.pop();

      const response = await api.get(`/bilhetes/${lastPart}`);
      console.log(response)

      setRifaId(response.data.rifa_id)
      setRifaNome(response.data.nomeRifa)
      setValorBilhete(response.data.bilheteVenda[0].valorBilhete)
      setEquipe(response.data.equipe)
      setBilhete(response.data.bilhete)
    }
    pegarParamURL();
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
          <div className="row rifaIdNone" >
            <div className="input-field col s10 divTamanho ">
              <input
                value={rifa_id}
                onChange={(e) => setRifaId(e.target.value)}
                id="name3"
                type="text"
                className="validate"
                disabled
              />
              <label class="active">Rifa ID</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                value={rifaNome}
                onChange={(e) => setRifaNome(e.target.value)}
                id="name3"
                type="text"
                className="validate"
                disabled
              />
              <label class="active">Rifa</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                value={valorBilhete}
                onChange={(e) => setValorBilhete(e.target.value)}
                type="number"
                className="validate"
                disabled
              />
              <label class="active">Valor do bilhete</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                value={quemComprou}
                onChange={(e) => setQuemComprou(e.target.value)}
                className="validate"
              />
              <label class="active">Quem comprou</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                value={equipe}
                onChange={(e) => setEquipe(e.target.value)}
                type="text"
                className="validate"
                disabled
              />
              <label class="active">Equipe</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                value={bilhete}
                onChange={(e) => setBilhete(e.target.value)}
                type="number"
                className="validate"
                disabled
              />
              <label class="active">Número do bilhete</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                value={meioPagamento}
                onChange={(e) => setMeioPagamento(e.target.value)}
                className="validate"
              />
              <label class="active">Meio de Pagamento</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                value={responsavelVenda}
                onChange={(e) => setResponsavelVenda(e.target.value)}
                className="validate"
              />
              <label class="active">Responsável pela venda</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                className="validate"
                value={identificacaoPagamento}
                onChange={(e) => setIdentificacao(e.target.value)}
              />
              <label class="active">Identificação do pagamento</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input
                onChange={(e) => setDataVenda(e.target.value)}
                className="validate"
                type="date"
              />
              <label class="active">Data de venda</label>
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
