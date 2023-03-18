import React, { useEffect, useState } from "react";
import api from "../../../server/api";
import "../../../App.css";
import MenusFixos from "../..";
import MenuLateral from "../../Home/MenuLateral/menuLateral";
import Modal from "react-modal";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

function ReestruturacaoCognitiva() {
  const [allEquipes, setEquipesAll] = useState([]);
  
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
