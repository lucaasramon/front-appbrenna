import React, { useEffect, useState, useContext } from 'react';
import '../../App.css';
import MenusFixos from '..';
import MenuLateral from '../Home/MenuLateral/menuLateral';
import api from '../../server/api';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { AuthContext } from "../../contexts/authContext";

function GerenciarRifas() {
  const [todasRifas, setTodasRifas] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const value = useContext(AuthContext);

  useEffect(() => {
    async function getTodasRifas() {
      const response = await api.get('/rifas');
      console.log("RIFA#", response.data)
      setTodasRifas(response.data);
    }

    getTodasRifas();

    //Desabilita o botão se não for administrador
    setIsDisabled(value.userAdm);
  }, []);

  return (
    <>
      <MenuLateral />
      <div className="container z-depth-1 subpages collection  cardFiltro">
        <div className="row ">
          <div className="col s12 pad-0">
            <h5 className="bot-20 sec-tit">Gerenciar Rifas</h5>
          </div>
        </div>
        <hr />
        <div className="col s10 offset-s1">
          <label for="">Pesquisar</label>
        </div>
        <div className="input-field col s10 offset-s1">
          <input id="" type="text" className="" />
          <label className="active" for="">
            Nome da Rifa
          </label>
        </div>
        <div className="btn-novo">
          {isDisabled
            ? (<Link to="/Cadastrar-rifa" style={styles.button}>
                <button class="waves-effect waves-light btn brown lighten-2">
                Nova Rifa
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
                    <th>Rifa</th>
                    <th>Qtde. Números</th>
                    <th>Data Inicial</th>
                    <th>Data Final</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {todasRifas.map((rifa) => (
                    <tr>
                      <td>{rifa.titulo}</td>
                      <td>{rifa.numeroFinal}</td>
                      <td>
                        <Moment format="DD/MM/YYYY">{rifa.dataInicio}</Moment>
                      </td>
                      <td>
                        <Moment format="DD/MM/YYYY">{rifa.dataFim}</Moment>
                      </td>
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

export default GerenciarRifas;
