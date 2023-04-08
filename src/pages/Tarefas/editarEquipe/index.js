import React, { useEffect, useState } from "react";
import api from "../../../server/api";
import "../../../App.css";

const fontSelct = {
  padding: "0 0 0 8px",
  color: "#9e9e9e",
};

function EditarEquipe() {
  const [componentesEquipe, setComponentesEquipe] = useState([]);
  const [responsavel, setResponsavel] = useState("");
  const [allUsuario, setAllUsuario] = useState([]);
  const [allRifas, setAllRifas] = useState([]);
  const [allRifasEdit, setAllRifasEdit] = useState([]);

  function setMembro(e) {
    const selectedValue = e.target.value;
    setComponentesEquipe([...componentesEquipe, selectedValue]);
  }

  function removeMembro(index) {
    setComponentesEquipe(componentesEquipe.filter((value, i) => i !== index));
  }

  function setUsuarioResponsavel(e) {
    const _selectedValue = e.target.value;
    setResponsavel(_selectedValue);
  }

  function toBack(e) {
    e.preventDefault();
    window.history.back();
  }

  async function EquipeSubmit(e) {
    e.preventDefault();
    let url = window.location.pathname;
    let parts = url.split("/");
    let lastPart = parts.pop() || parts.pop();
    await api.post("/equipesUpDate/" + lastPart, {
      componentesEquipe,
      responsavel,
    }).then(response => {
        alert('Alterações salvas');
        window.location.href = "/Equipes";
    }).catch(error => {
        alert('Erro inesperado');
      });;
  }

  //Função que pega todos os usuarios do banco
  useEffect(() => {
    async function retornaUsuarios() {
      const usuario = await api.get("/usuario");
      setAllUsuario(usuario.data);
    }
    async function retornaRifas() {
      const rifas = await api.get("/rifas");
      setAllRifas(rifas.data);
    }

    async function retornaRifasEdit() {
      let url = window.location.pathname;
      let parts = url.split("/");
      let lastPart = parts.pop() || parts.pop();
      const valueEquipe = await api.get(
        "/buscaNumeroBilheteEquipe/" + lastPart
      );
      setComponentesEquipe(valueEquipe.data[0].componentesEquipe);
      setResponsavel(valueEquipe.data[0].responsavel);
      setAllRifasEdit(valueEquipe.data[0]);
    }

    retornaUsuarios();
    retornaRifas();
    retornaRifasEdit();
  }, []);
  return (
    <>
      <div className="container z-depth-1 subpages collection  cardFiltro">
        <div className="modal-content">
          <div className="row ">
            <div className="col s12 pad-0">
              <h5 className="bot-20 sec-tit">Cadastrar Equipe</h5>
            </div>
          </div>
          <form>
            <div className="col s12 m6">
              <label className="active">Rifa</label>
              <select
                id="rifa"
                type="text"
                className="input-field browser-default"
              >
                {allRifas.map((data) => (
                  <option value={data.rifa_id}>{data.titulo}</option>
                ))}
              </select>
            </div>
            <div className="input-field col s10 offset-s1">
              <input disabled value={allRifasEdit.valorBilhete} type="text" />
              <label className="active">Valor do bilhete</label>
            </div>
            <div className="input-field col s10 offset-s1">
              <input
                disabled
                value={allRifasEdit.equipe}
                id="equipe"
                type="text"
              />
              <label className="active">Nome da Equipe</label>
            </div>
            <div className="col s12 m6">
              <select
                onChange={setUsuarioResponsavel}
                id=""
                type="text"
                style={fontSelct}
                className="input-field browser-default"
              >
                {allUsuario.map((data) => (
                  <option
                    key={data.id}
                    value={data.nome}
                    selected={data.nome === allRifasEdit.responsavel}
                  >
                    {data.nome}
                  </option>
                ))}
              </select>
            </div>

            <hr />
            <label>Componentes da equipe</label>
            <div className="col s12 m6">
              <select
                onChange={setMembro}
                id=""
                type="text"
                style={fontSelct}
                className="input-field browser-default"
              >
                {allUsuario.map((data) => (
                  <option value={data.nome}>{data.nome}</option>
                ))}
              </select>
            </div>
            <div className="componenteDeUsuario">
              {componentesEquipe.map((value, index) => {
                return (
                  <div className="grupoMembro">
                    <div className="grupoMembro1">
                      <label className="valueMembro" key={index}>
                        {value}
                      </label>
                    </div>
                    <div>
                      <button
                        onClick={() => removeMembro(index)}
                        className="buttonMembro"
                      >
                        <i class="large material-icons">delete_forever</i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="grupoBotao">
              <div className="modal-footer">
                <button
                  onClick={EquipeSubmit}
                  type="button"
                  className="waves-effect waves-light btn bg-primary"
                >
                  Salvar
                </button>
              </div>
              <div className="modal-footer">
                <button
                  onClick={toBack}
                  className="waves-effect waves-light btn brown lighten-2 btnVoltar"
                >
                  Voltar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditarEquipe;
