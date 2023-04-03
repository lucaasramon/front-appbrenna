import React, { useEffect, useState } from "react";
import api from "../../../server/api";
import "../../../App.css";
import MenusFixos from "../..";
import MenuLateral from "../../Home/MenuLateral/menuLateral";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
  },
};

Modal.setAppElement("#root");

function ReestruturacaoCognitiva() {
  const [allEquipes, setEquipesAll] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [numeroInicial, setNumeroInicial] = useState("");
  const [numeroFinal, setNumeroFinal] = useState("");
  const [idRifa, setIdRifa] = useState("");
  console.log(idRifa)
  
  //Função que pega todos os usuarios do banco
  useEffect(() => {
    async function retornaEquipes() {
      const response = await api.get("/equipes");
      setEquipesAll(response.data);
    }
    retornaEquipes();
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
          <label class="active" for="">
            Filtro
          </label>
        </div>
        <div className="input-field col s10 offset-s1">
          <input id="" type="text" className="" />
          <label class="active" for="">
            Nome da Equipe
          </label>
        </div>
        <div className="input-field col s10 offset-s1">
          <input id="" type="text" className="" />
          <label class="active" for="">
            Nome do Responsavel
          </label>
        </div>
        <div className="btn-novo">
          <Link to="/cadastroEquipe">
            <button class="waves-effect waves-light btn brown lighten-2">
              Nova Equipe
            </button>
          </Link>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div className="row ">
            <div className="col divResponsive s12 pad-0">
              <table className="striped colored primary">
                <thead>
                  <tr>
                    <th>Equipe</th>
                    <th>Responsavel</th>
                    <th>Número inicial</th>
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
                      <div>
              <button
                type="button"
                onClick={(e) => setModalIsOpen(true) && setIdRifa(data._id)}
                className="waves-effect waves-light btn bg-primary"
              >
                Adicione os números de bilhetes
              </button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
              >
                <h2>Números de bilhetes</h2>
                <input value={numeroFinal}></input>
                <div className="input-field col s10 offset-s1">
                  <input
                    value={numeroInicial}
                    onChange={(e) => setNumeroInicial(e.target.value)}
                    id=""
                    type="number"
                    className=""
                  />
                  <label className="active">Número Inicial</label>
                </div>
                <div className="input-field col s10 offset-s1">
                  <input
                    value={numeroFinal}
                    onChange={(e) => setNumeroFinal(e.target.value)}
                    id=""
                    type="number"
                    className=""
                  />
                  <label className="active">Número Final</label>
                </div>
                <br />
                <div className="grupoBotao">
                  <div className="modal-footer">
                    <button
                      type="submit"
                      className="waves-effect waves-light btn bg-primary"
                    >
                      Adicionar
                    </button>
                  </div>
                  <div className="modal-footer">
                    <button
                      onClick={() => setModalIsOpen(false)}
                      className="waves-effect waves-light btn brown lighten-2 btnVoltar"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
                <br />
                <div className="col divResponsive s12 pad-0">
                  <table className="striped colored primary">
                    <thead>
                      <tr>
                        <th>Número Inicial</th>
                        <th>Numero Final</th>
                        <th>Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>50</td>
                        <td>
                          <button className="waves-effect waves-light btn brown lighten-2">
                            Detalhes
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Modal>
            </div>
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

      <MenusFixos />
    </>
  );
}
export default ReestruturacaoCognitiva;
