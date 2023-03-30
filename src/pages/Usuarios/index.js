import React, { useEffect, useState, useContext } from "react";
import "../../App.css";
import MenusFixos from "..";
import MenuLateral from "../Home/MenuLateral/menuLateral";
import api from "../../server/api";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

function Usuarios() {
  const [allUsers, setAllUsers] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const value = useContext(AuthContext);
 

  useEffect(() => {
    async function getUser() {
      const response = await api.get("/usuario");

      setAllUsers(response.data);
      //Desabilita o botão se não for administrador
      setIsDisabled(value.userAdm);
    }

    getUser();
    
  }, []);


  return (
    <>
      <MenuLateral />
      <div className="container z-depth-1 subpages collection  cardFiltro">
        <div className="row ">
          <div className="col s12 pad-0">
            <h5 className="bot-20 sec-tit">Usuarios</h5>
          </div>
        </div>
        <hr />
        <div className="col s10 offset-s1">
          <label htmlFor="">Filtros</label>
        </div>
        <div className="input-field col s10 offset-s1">
          <input id="" type="text" className="" />
          <label className="active" htmlFor="">Nome</label>
        </div>
        <div className="input-field col s10 offset-s1">
          <input id="" type="text" className="" />
          <label className="active" htmlFor="">Idade</label>
        </div>
        <div className="input-field col s10 offset-s1">
          <input id="" type="text" className="" />
          <label className="active" htmlFor="">Telefone</label>
        </div>
          
        <div className="btn-novo">
          {isDisabled
            ? (<Link to="/cadastroUsuario" style={styles.button}>
                <button class="waves-effect waves-light btn brown lighten-2">
                  Novo Usuário
                </button>
              </Link>)
            : <Link to="#" style={styles.buttonDisabled} >Botão Desabilitado</Link>
          }          
        </div>        
      </div>

      <div className="container">
        <div className="section">
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
                        <a className="waves-effect waves-light btn brown lighten-2">
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

// Styles
const styles = {  
  button: {
    cursor: 'pointer',
  },
  buttonDisabled: {
    cursor: 'not-allowed',
  },
};

export default Usuarios;
