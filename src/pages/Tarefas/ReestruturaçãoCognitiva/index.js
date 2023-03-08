import React, { useEffect, useState } from "react";
import api from "../../../server/api";
import "../../../App.css";
import MenusFixos from "../..";
import MenuLateral from "../../menuLateral/menuLateral";
import Modal from "react-modal";
import moment from "moment";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function ReestruturacaoCognitiva() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [situacao, setSituacao] = useState("");
  const [pensamento, setPensamento] = useState("");
  const [emocao, setEmocao] = useState("");
  const [comportamento, setComportamento] = useState("");
  const [pensamentoAlternativo, setPensamentoAlternativo] = useState("");
  const [allReestruturacao, setAllReestruturacao] = useState([]);

  async function NovaReestruturacaoSubmit(e) {
    e.preventDefault();

    if (
      situacao === "" ||
      pensamento === "" ||
      emocao === "" ||
      comportamento === "" ||
      pensamentoAlternativo === ""
    ) {
      alert("Tem um campo vazio");
    } else {
      await api.post("/reestruturacaoCognitiva", {
        user: "Lucas",
        data: moment(new Date()).format("DD/MM/YY"),
        situacao,
        pensamento,
        emocao,
        comportamento,
        pensamentoAlternativo,
        priority: false,
      });
      alert("Cadastro realizado com sucesso!");

      // Limpa os campos preenchidos
      setSituacao("");
      setPensamento("");
      setEmocao("");
      setComportamento("");
      setPensamentoAlternativo("");

      setIsOpen(false);
    }
  }

  //Função que pega todos os usuarios do banco
  useEffect(() => {
    async function retornaReestruturacoes() {
      const response = await api.get("/reestruturacaoCognitiva");
      setAllReestruturacao(response.data);
    }
    retornaReestruturacoes();
  }, []);

  return (
    <>
      <MenuLateral />
      <div class="container z-depth-1 subpages collection  cardFiltro">
        <div class="row ">
          <div class="col s12 pad-0">
            <h5 class="bot-20 sec-tit">Reestruturação Cognitiva</h5>
          </div>
        </div>
        <hr />
        <div className="col s10 offset-s1">
          <label for="">Filtros</label>
        </div>
        <div className="input-field col s10 offset-s1">
          <input id="" type="text" className="" />
          <label for="">Nome</label>
        </div>
        <div className="input-field col s10 offset-s1">
          <input id="" type="text" className="" />
          <label for="">Data</label>
        </div>
        <div className="btn-novo">
          <button
            onClick={openModal}
            class="waves-effect waves-light btn brown lighten-2"
          >
            Nova Reestruturação Cognitiva
          </button>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div className="row ">
            <div className="col divResponsive s12 pad-0">
              <table className="striped colored primary">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Data</th>
                    <th>Situação</th>
                    <th>Pensamento</th>
                    <th>Emoção</th>
                    <th>Comportamento</th>
                    <th>Pensamento Alternativo</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {allReestruturacao.map((data) => (
                    <tr>
                      <td>{data.user}</td>
                      <td>{data.data}</td>
                      <td>{data.situacao}</td>
                      <td>{data.pensamento}</td>
                      <td>{data.emocao}</td>
                      <td>{data.comportamento}</td>
                      <td>{data.pensamentoAlternativo}</td>
                      <td>
                        <button className="waves-effect waves-light btn brown lighten-2">
                          Detalhes
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="modal-content">
          <div class="row ">
            <div class="col s12 pad-0">
              <h5 class="bot-20 sec-tit">Nova Reestruturação</h5>
            </div>
          </div>
          <form onSubmit={NovaReestruturacaoSubmit}>
            <div className="input-field col s10 offset-s1">
              <input
                value={situacao}
                onChange={(e) => setSituacao(e.target.value)}
                id=""
                type="text"
                className=""
              />
              <label for="">Situação</label>
            </div>
            <div className="input-field col s10 offset-s1">
              <input
                value={pensamento}
                onChange={(e) => setPensamento(e.target.value)}
                id=""
                type="text"
                className=""
              />
              <label for="">Pensamento</label>
            </div>
            <div className="input-field col s10 offset-s1">
              <input
                value={emocao}
                onChange={(e) => setEmocao(e.target.value)}
                id=""
                type="text"
                className=""
              />
              <label for="">Emoção</label>
            </div>
            <div className="input-field col s10 offset-s1">
              <input
                value={comportamento}
                onChange={(e) => setComportamento(e.target.value)}
                id=""
                type="text"
                className=""
              />
              <label for="">Comportamento</label>
            </div>
            <div className="input-field col s10 offset-s1">
              <input
                value={pensamentoAlternativo}
                onChange={(e) => setPensamentoAlternativo(e.target.value)}
                id=""
                type="text"
                className=""
              />
              <label for="">Pensamento Alternativo</label>
            </div>

            <div className="modal-footer">
              <hr />
              <button
                type="submit"
                className="waves-effect waves-light btn brown  btnSalvar-modal"
              >
                Salvar
              </button>
              <button
                onClick={closeModal}
                className="waves-effect waves-light btn brown  btnFechar-modal"
              >
                Fechar
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <MenusFixos />
    </>
  );
}
export default ReestruturacaoCognitiva;
