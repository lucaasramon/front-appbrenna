import React, { useEffect, useState } from "react";
import "../../App.css";
import MenusFixos from "..";
import MenuLateral from "../Home/MenuLateral/menuLateral";
import api from "../../server/api";
import { Link } from "react-router-dom";


function Bilhete() {
  const [allBilhetes, setAllUsers] = useState([]);

  useEffect(() => {
    async function getBilhete() {
      const response = await api.get("/bilhetes");

      setAllUsers(response.data);
    }

    getBilhete();
  }, []);


  return (
    <>
      <MenuLateral />
      <div class="container z-depth-1 subpages collection  cardFiltro">
        <div class="row ">
          <div class="col s12 pad-0">
            <h5 class="bot-20 sec-tit">Usuarios</h5>
          </div>
        </div>
        <hr />
        <div className="col s10 offset-s1">
          <label for="">Filtros</label>
        </div>
        <div className="input-field col s10 offset-s1">
          <input id="" type="text" className="" />
          <label class="active" for="">Nome</label>
        </div>
        <div className="input-field col s10 offset-s1">
          <input id="" type="text" className="" />
          <label class="active" for="">Idade</label>
        </div>
        <div className="input-field col s10 offset-s1">
          <input id="" type="text" className="" />
          <label class="active" for="">Telefone</label>
        </div>
        <Link to="/cadastro-Bilhete">
        <div className="btn-novo">
          <a href="{}" class="waves-effect waves-light btn brown lighten-2">
            Baixa de Bilhete
          </a>
        </div>
        </Link>
      </div>

      <div class="container">
        <div class="section">
          <div className="row ">
            <div className="col divResponsive s12 pad-0">
              <table className="striped colored primary">
                <thead>
                  <tr>
                    <th>Rifa</th>
                    <th>Valor do Bilhete</th>
                    <th>N. Bilhete</th>
                    <th>Responsavel</th>
                    <th>Data da venda</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {allBilhetes.map((data) => (
                    <tr>
                      <td>{data.rifa_id}</td>
                      <td>{data.bilhete}</td>
                      <td>{data.bilheteVenda}</td>
                      <td>{data.numero}</td>
                      <td>{data.numero}</td>
                      <td>
                        <a href="{}" class="waves-effect waves-light btn brown lighten-2">
                          Detalhes
                        </a>
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

export default Bilhete;
