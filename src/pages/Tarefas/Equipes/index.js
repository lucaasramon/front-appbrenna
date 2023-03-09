import React, { useEffect, useState } from "react";
import api from "../../../server/api";
import "../../../App.css";
import MenusFixos from "../..";
import MenuLateral from "../../menuLateral/menuLateral";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

const fontSelct = {
    padding: "0 0 0 8px",
    color: "#9e9e9e"
}
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

  const [equipe, setEquipe] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [numeroInicial, setNumeroInicial] = useState("");
  const [numeroFinal, setNumeroFinal] = useState("");
  const [allEquipes, setEquipesAll] = useState([]);
  const [allUsuario, setAllUsuario] = useState([]);

  async function EquipeSubmit(e) {
    e.preventDefault();

    if (
      equipe === "" ||
      responsavel === "" ||
      numeroInicial === "" ||
      numeroFinal === ""
    ) {
      alert("Tem um campo vazio");
    } else {
      await api.post("/equipes", {
        equipe,
        responsavel,
        numeroInicial,
        numeroFinal,
        priority: false,
      });
      alert("Cadastro realizado com sucesso!");

      // Limpa os campos preenchidos
      setEquipe("");
      setResponsavel("");
      setNumeroInicial("");
      setNumeroFinal("");
      setIsOpen(false);
    }
  }

  //Função que pega todos os usuarios do banco
  useEffect(() => {
    async function retornaEquipes() {
      const response = await api.get("/equipes");
      setEquipesAll(response.data);
    }
    async function retornaUsuarios() {
      const usuario = await api.get("/usuario");
      setAllUsuario(usuario.data);
    }
    retornaEquipes();
    retornaUsuarios();
  }, []);

  return (
    <>
      <MenuLateral />
      <div class="container z-depth-1 subpages collection  cardFiltro">
        <div class="row ">
          <div class="col s12 pad-0">
            <h5 class="bot-20 sec-tit">Equipes</h5>
          </div>
        </div>
        <hr />
        <div className="col s10 offset-s1">
          <label class="active" for="">Filtro</label>
        </div>
        <div className="input-field col s10 offset-s1">
          <input id="" type="text" className="" />
          <label class="active" for="">Nome da Equipe</label>
        </div>
        <div className="input-field col s10 offset-s1">
          <input id="" type="text" className="" />
          <label class="active" for="">Nome do Responsavel</label>
        </div>
        <div className="btn-novo">
          <button
            onClick={openModal}
            class="waves-effect waves-light btn brown lighten-2"
          >
            Nova Equipe
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
                    {/* nome */}
                    <th>Equipe</th>
                    {/* data */}
                    <th>Responsavel</th>
                    {/* Situação */}
                    <th>Número inicial</th>
                    {/* Pensamento */}
                    <th>Número final</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {allEquipes.map((data) => (
                    <tr>
                      <td>{data.equipe}</td>
                      <td>{data.responsavel}</td>
                      <td>{data.numeroInicial}</td>
                      <td>{data.numeroFinal}</td>
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
              <h5 class="bot-20 sec-tit">Cadastrar Equipe</h5>
            </div>
          </div>
          <form onSubmit={EquipeSubmit}>
            <div className="input-field col s10 offset-s1">
              <input
                value={equipe}
                onChange={(e) => setEquipe(e.target.value)}
                id="equipe"
                type="text"
                className=""
              />
              <label class="active" for="equipe">Equipe</label>
            </div>
            <div className="col s12 m6">
              <select
                value={responsavel}
                onChange={(e) => setResponsavel(e.target.value)}
                id=""
                type="text"
                style={fontSelct}
                className="input-field browser-default"
              > 
              <option value="" disabled>Responsavel</option>
              {allUsuario.map((data) => (
                <option value={data.nome}>{data.nome}</option>
              ))}
                
              </select>   
              
           
            </div>
            <div className="input-field col s10 offset-s1">
              <input
                value={numeroInicial}
                onChange={(e) => setNumeroInicial(e.target.value)}
                id=""
                type="number"
                className=""
              />
              <label class="active" for="">Número Inicial</label>
            </div>
            <div className="input-field col s10 offset-s1">
              <input
                value={numeroFinal}
                onChange={(e) => setNumeroFinal(e.target.value)}
                id=""
                type="number"
                className=""
              />
              <label class="active" for="">Número Final</label>
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
