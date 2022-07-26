import React, { useEffect, useState } from "react";
import $ from "jquery";
import "../../App.css";
import MenusFixos from "../menusFixos";
import MenuLateral from "../menuLateral/menuLateral";
import api from "../../server/api";

function Usuarios() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function getUser() {
      const response = await api.get("/usuario");

      setAllUsers(response.data);
    }

    getUser();
  }, []);

  function AbrirDetalhes(e) {
    e.preventDefault();

    $("#modal2").modal("show");
  }
  AbrirDetalhes()
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
          <label for="">Nome</label>
        </div>
        <div className="input-field col s10 offset-s1">
          <input id="" type="text" className="" />
          <label for="">Idade</label>
        </div>
        <div className="input-field col s10 offset-s1">
          <input id="" type="text" className="" />
          <label for="">Telefone</label>
        </div>
        <div className="btn-novo">
          <a href="{}" class="waves-effect waves-light btn brown lighten-2">
            Novo Usuario
          </a>
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
                    <th>Idade</th>
                    <th>Telefone</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers.map((data) => (
                    <tr>
                      <td>{data.nome}</td>
                      <td>{data.idade}</td>
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

export default Usuarios;
