import React, { useEffect, useState } from "react";
import api from "../../server/api";
import "../../App.css";
import MenusFixos from "..";
import MenuLateral from "../Home/MenuLateral/menuLateral";
import BoxBilhete from "../../components/BoxBilhete";
import { Link } from "react-router-dom";

function ConsultaBilhetes() {
  const [bilhetesAll, setBilhetesAll] = useState([]);
  const [equipesAll, setEquipesAll] = useState([]);
  const [equipesItem, setItemEquipe] = useState("");
  const [bilhetesEquipe, setBilhetesEquipe] = useState([]);
  const [idBilhete, setIdBilhete] = useState(null);

  console.log("TESTE", idBilhete);
  //Obtem a equipe selecionada:
  function setEquipeItem(e) {
    const selectedValue = e.target.value;
    setItemEquipe(selectedValue);

    console.log(selectedValue);
    if (selectedValue !== "Todas") {
      //Obtem os bilhetes por equipe selecionadas:
      setBilhetesEquipe(
        bilhetesAll.filter(function (e) {
          return e.equipe === selectedValue;
        })
      );
    }
  }

  useEffect(() => {
    async function getBilhetes() {
      const responseBilhetes = await api.get("/bilhetes");

      setBilhetesAll(responseBilhetes.data);
    }
    getBilhetes();

    setItemEquipe("Todas");

    async function getEquipes() {
      const responseEquipes = await api.get("/equipes");

      setEquipesAll(responseEquipes.data);
    }
    getEquipes();
  }, []);

  return (
    <>
      <MenuLateral />
      <div class="container z-depth-1 subpages collection  cardFiltro">
        <div class="row ">
          <div class="col s12 pad-0">
            <h5 class="bot-20 sec-tit">Consulta de Bilhetes</h5>
          </div>
        </div>
        <div className="col s10 offset-s1">
          <label for="">Filtrar</label>
        </div>
        <hr />
        <label class="active" for="">
          Equipes:
        </label>
        <div className="col s12 m6">
          <select
            id="equipeSelecionada"
            type="submit"
            value={equipesItem}
            onChange={setEquipeItem}
            className="input-field browser-default"
          >
            <option value="Todas">Todas...</option>
            {equipesAll.map((data) => (
              <option value={data.equipe}>{data.equipe}</option>
            ))}
          </select>
        </div>
        <div class="container">
          <div class="section">
            <div>
              <h6 class="sec-tit">Equipe: {equipesItem}</h6>
            </div>
            <div className="conteiner">
              {equipesItem === "Todas"
                ? bilhetesAll.map((data) => (
                    <div
                      onClick={() => {
                        setIdBilhete(data._id);
                        window.location.href = `/cadastro-Bilhete/${data._id}`;
                      }}
                      className="conteinerBilhetes"
                    >
                      <BoxBilhete
                        numero={data.bilhete}
                        data={data.bilheteVenda[0].dataVenda}
                        status={data.status}
                      />
                    </div>
                  ))
                : (console.log(bilhetesEquipe),
                  bilhetesEquipe.map((data) => (
                    <div
                      onClick={() => setIdBilhete(data._id)}
                      className="conteinerBilhetes"
                    >
                      <BoxBilhete
                        numero={data.bilhete}
                        data={data.bilheteVenda[0].dataVenda}
                      />
                    </div>
                  )))}
            </div>
          </div>
        </div>
      </div>
      <MenusFixos />
    </>
  );
}

export default ConsultaBilhetes;
