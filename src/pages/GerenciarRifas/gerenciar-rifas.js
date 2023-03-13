import React, { useEffect, useState } from 'react';
import '../../App.css';
import MenusFixos from '..';
import MenuLateral from '../Home/MenuLateral/menuLateral';
import api from '../../server/api';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

function GerenciarRifas() {
  const [todasRifas, setTodasRifas] = useState([]);

  useEffect(() => {
    async function getTodasRifas() {
      const response = await api.get('/rifas');

      setTodasRifas(response.data);
    }

    getTodasRifas();
  }, []);

  return (
    <>
      <MenuLateral />
      <div class="container z-depth-1 subpages collection  cardFiltro">
        <div class="row ">
          <div class="col s12 pad-0">
            <h5 class="bot-20 sec-tit">Gerenciar Rifas</h5>
          </div>
        </div>
        <hr />
        <div className="col s10 offset-s1">
          <label for="">Pesquisar</label>
        </div>
        <div className="input-field col s10 offset-s1">
          <input id="" type="text" className="" />
          <label class="active" for="">
            Nome da Rifa
          </label>
        </div>

        <Link to="/Cadastrar-rifa">
          <div className="btn-novo">
            <a href="{}" class="waves-effect waves-light btn brown lighten-2">
              Nova Rifa
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

export default GerenciarRifas;
