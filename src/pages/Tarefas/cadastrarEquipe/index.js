import React, { useEffect, useState } from "react";
import api from "../../../server/api";
import "../../../App.css";
import Modal from "react-modal";

const fontSelct = {
  padding: "0 0 0 8px",
  color: "#9e9e9e",
};

Modal.setAppElement("#root");
function CadastroEquipe() {
  const [equipe, setEquipe] = useState("");
  const [rifa, setRifa] = useState("");
  const [valorBilhete, setValorBilhete] = useState("");
  const [componentesEquipe, setComponentesEquipe] = useState([]);
  const [responsavel, setResponsavel] = useState("");
  const [numeroInicial, setNumeroInicial] = useState("");
  const [numeroFinal, setNumeroFinal] = useState("");
  const [allUsuario, setAllUsuario] = useState([]);
  const [allRifas, setAllRifas] = useState([]);
  console.log(valorBilhete)

  function setMembro(e) {
    const selectedValue = e.target.value;
    setComponentesEquipe([...componentesEquipe, selectedValue]);
  }

  function removeMembro(index) {
    console.log(index);
    setComponentesEquipe(componentesEquipe.filter((value, i) => i !== index));
  }

  function toBack(e) {
    e.preventDefault();
    window.history.back();
  }

  async function EquipeSubmit(e) {
    e.preventDefault();

    if (
      equipe === "" ||
      rifa === "" ||
      valorBilhete === "" ||
      componentesEquipe.length === 0 ||
      responsavel === "" ||
      numeroInicial === "" ||
      numeroFinal === ""
    ) {
      alert("Tem um campo vazio");
    } else {
      await api.post("/equipes", {
        equipe,
        rifa,
        valorBilhete,
        componentesEquipe,
        responsavel,
        numeroInicial,
        numeroFinal,
        priority: false,
      });
      alert("Cadastro realizado com sucesso!");

      window.location.href = "/Equipes";
      // Limpa os campos preenchidos
      setEquipe("");
      setResponsavel("");
      setNumeroInicial("");
      setNumeroFinal("");
    }
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
    async function retornaRifas() {
      const rifas = await api.get("/rifas");
      setAllRifas(rifas.data);
    }
    retornaUsuarios();
    retornaRifas();
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
          <form onSubmit={EquipeSubmit}>
            <div className="col s12 m6">
              <label className="active">Rifa</label>
              <select
                onChange={(e) => {
                  setRifa(e.target.value);
                  allRifas.forEach((element) => {
                    if(element._id == e.target.value){
                      setValorBilhete(element.valorBilhete)
                    }

                  })
                } }
                id="rifa"
                type="text"
                className="input-field browser-default"
              >
                <option disabled selected>Escolha a rifa</option>
                {allRifas.map((data) => (
                  <option value={data._id}>{data.titulo}</option>
                  ))}
              </select>
            </div>
            <div className="input-field col s10 offset-s1">
              <input
              disabled
                value={valorBilhete}
                onChange={(e) => setValorBilhete(e.target.value)}
                id="valorBilhete"
                type="text"
                className=""
              />
              <label className="active">Valor do bilhete</label>
            </div>
            <div className="input-field col s10 offset-s1">
              <input
                value={equipe}
                onChange={(e) => setEquipe(e.target.value)}
                id="equipe"
                type="text"
                className=""
              />
              <label className="active">Nome da Equipe</label>
            </div>
            <div className="col s12 m6">
              <select
                value={responsavel}
                onChange={(e) => setResponsavel(e.target.value)}
                id=""
                type="text"
                style={fontSelct}
                className="input-field browser-default"
              >
                <option value="" disabled>
                  Responsavel
                </option>
                {allUsuario.map((data) => (
                  <option value={data.nome}>{data.nome}</option>
                ))}
              </select>
            </div>
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
                  type="submit"
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

export default CadastroEquipe;
