import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import api from '../../../server/api';
import '../../../App.css';

const rowTwoInputs = {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '25px',
  marginBottom: '30px',
};
const inputRowTwo = {
  width: '35% !important',
  margin: '0px',
};

function CadastrarRifa() {
  const [titulo, setTitulo] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [valorBilhete, setValorBilhete] = useState('');
  const [numeroInicial, setNumeroInicial] = useState('');
  const [numeroFinal, setNumeroFinal] = useState('');
  const [id, setId] = useState('');

  function toBack(e) {
    e.preventDefault();
    window.history.back();
  }
  // Função que captura os valores do input e salva no banco.
  async function NovoCadastroSubmit(e) {
    e.preventDefault();
    const ultimaRifa = await api.get('/rifas');

    let id_counter = 0;
    ultimaRifa.data.forEach((element) => {
      if (element.id_counter > id_counter) {
        id_counter = element.id_counter;
      }
    });
    id_counter++;

    if (numeroInicial > numeroFinal) {
      alert(' A numeração fim precisa ser maior que a numeração inicial');
    } else {
      await api.post('/rifas', {
        id_counter,
        titulo,
        dataInicio,
        dataFim,
        valorBilhete,
        numeroInicial,
        numeroFinal,
      });
      alert('Cadastro realizado com sucesso!');
    }

    // Limpa os campos preenchidos
    setTitulo('');
    setDataInicio('');
    setDataFim('');
    setValorBilhete('');
    setNumeroInicial('');
    setNumeroFinal('');
  }

  return (
    <>
      <div class="container z-depth-1 subpages collection  cardFiltro">
        <div className="row ">
          <div className="col s12 pad-0">
            <h5 className="bot-20 sec-tit">Cadastro de Rifa</h5>
          </div>
        </div>
        <form id="form" onSubmit={NovoCadastroSubmit}>
          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <input onChange={(e) => setTitulo(e.target.value)} required id="name3" type="text" className="validate" />
              <label class="active" for="name3">
                Titulo da Rifa
              </label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s10 divTamanho ">
              <label class="active" for="dataInicio">
                Data Inicio
              </label>
              <input onChange={(e) => setDataInicio(e.target.value)} required id="dataInicio" type="date" className="validate" />
            </div>
            <div className="input-field col s10 divTamanho ">
              <label class="active" for="dataFim">
                Data Fim
              </label>
              <input onChange={(e) => setDataFim(e.target.value)} required id="dataFim" type="date" className="validate" />
            </div>
            <div className="input-field col s10 divTamanho ">
              <label class="active" for="valorBilhete">
                Valor do Bilhete
              </label>
              <input onChange={(e) => setValorBilhete(e.target.value)} required id="valorBilhete" type="number" className="validate" />
            </div>
          </div>

          <div className="row ">
            <div className="col s12 pad-0">
              <h5 className="bot-20 sec-tit">Numeração</h5>
            </div>
          </div>

          <div style={rowTwoInputs}>
            <div style={inputRowTwo} className="input-field col s10 divTamanho ">
              <label class="active" for="numeroInicio">
                Inicial
              </label>
              <input onChange={(e) => setNumeroInicial(e.target.value)} required id="numeroInicio" type="number" className="validate" />
            </div>
            <div style={inputRowTwo} className="input-field col s10 divTamanho ">
              <label class="active" for="dataFim">
                Fim
              </label>
              <input onChange={(e) => setNumeroFinal(e.target.value)} required id="dataFim" type="number" className="validate" />
            </div>
          </div>

          <div className="row grupoBotao">
            <div>
              <button type="submit" className="waves-effect waves-light btn bg-primary">
                Salvar
              </button>
            </div>
            <div className="modal-footer">
              <button onClick={toBack} className="waves-effect waves-light btn brown lighten-2 btnVoltar">
                Voltar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CadastrarRifa;
