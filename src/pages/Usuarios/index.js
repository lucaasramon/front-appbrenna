import React, { useEffect, useState } from "react";
import "../../App.css";
import MenusFixos from "..";
import MenuLateral from "../Home/MenuLateral/menuLateral";
import api from "../../server/api";
import { Link } from "react-router-dom";


function Usuarios() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function getUser() {
      const response = await api.get("/usuario");

      setAllUsers(response.data);
    }

    getUser();
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
        <Link to="/cadastroUsuario">
        <div className="btn-novo">
          <a href="{}" class="waves-effect waves-light btn brown lighten-2">
            Novo Usuario
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
