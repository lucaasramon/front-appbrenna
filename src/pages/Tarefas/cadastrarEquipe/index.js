import React, { useEffect, useState } from "react";
import api from "../../../server/api";
import "../../../App.css";

const fontSelct = {
  padding: "0 0 0 8px",
  color: "#9e9e9e",
};


function CadastroEquipe() {
  const [equipe, setEquipe] = useState("");
  const [rifa_id, setRifa] = useState("");
  const [valorBilhete, setValorBilhete] = useState(null);
  const [componentesEquipe, setComponentesEquipe] = useState([]);
  const [numerosDeBilhetes, setNumerosDeBilhetes] = useState([]);
  const [responsavel, setResponsavel] = useState("");
  const [allUsuario, setAllUsuario] = useState([]);
  const [allRifas, setAllRifas] = useState([]);



  function setMembro(e) {
    const selectedValue = e.target.value;
    setComponentesEquipe([...componentesEquipe, selectedValue]);
  }

  function removeMembro(index) {
    console.log(index);
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
    console.log(rifa_id + " - Submit");
    console.log({
      equipe,
      rifa_id,
      valorBilhete,
      componentesEquipe,
      responsavel,
    });
    if (
      equipe === "" ||
      rifa_id === "" ||
      valorBilhete === "" ||
      componentesEquipe.length === 0 ||
      responsavel === ""
    ) {
      alert("Tem um campo vazio");
    } else {
      await api
        .post("/equipes", {
          equipe,
          rifa_id,
          valorBilhete,
          componentesEquipe,
          responsavel,
          numerosDeBilhetes,
          priority: false,
        })
        .then((response) => {
          alert("Cadastro realizado com sucesso!");
          window.location.href = "/Equipes";

          setEquipe("");
          setResponsavel("");
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
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
                    console.log(element);
                    if (element.rifa_id == e.target.value) {
                      setValorBilhete(element.valorBilhete);
                    }
                  });
                }}
                id="rifa"
                type="text"
                className="input-field browser-default"
              >
                <option disabled selected>
                  Escolha a rifa
                </option>
                {allRifas.map((data) => (
                  <option value={data.rifa_id}>{data.titulo}</option>
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
                onChange={setUsuarioResponsavel}
                id=""
                type="text"
                style={fontSelct}
                className="input-field browser-default"
              >
                <option value="">Responsavel</option>
                {allUsuario.map((data) => (
                  <option value={data.nome}>{data.nome}</option>
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

// Styles
const styles = {
  button: {
    cursor: "pointer",
  },
  buttonDisabled: {
    cursor: "not-allowed",
  },
};

export default CadastroEquipe;
