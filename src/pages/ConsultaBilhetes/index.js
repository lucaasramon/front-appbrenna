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
  const [equipesSelecionada, setEquipesSelecionadas] = useState([]);
  const [equipesItem, setItemEquipe] = useState("");
  const [bilhetesEquipe, setBilhetesEquipe] = useState([]);
  const [idBilhete, setIdBilhete] = useState(null);
  const [allRifas, setAllRifas] = useState([]);
  const [rifaId, setRifa] = useState("");

  //Obtem a rifa selecionada:
  function onChangeRifa(e) {
    const _selectedValue = e.target.value;
    setRifa(_selectedValue);
    //console.log(("RIFA SELECIONADA",{_selectedValue, rifaId}));
    //setItemEquipe("Todas");

    //
    if (_selectedValue !== "") {
      setEquipesSelecionadas(equipesAll.filter(function (e) {return e.rifa_id === parseInt(_selectedValue)}));      
    }
  }

  //Obtem a equipe selecionada:
  function onChangeEquipe(e) {
    const selectedValue = e.target.value;
    setItemEquipe(selectedValue);
    
    //Obtem os bilhetes por equipe selecionadas:
    setBilhetesEquipe(
      bilhetesAll.filter(function (e) {
        return e.equipe === selectedValue && e.rifa_id === rifaId        
      }) 
    );    
  }

  useEffect(() => {
    async function getBilhetes() {
      const responseBilhetes = await api.get("/bilhetes");

      setBilhetesAll(responseBilhetes.data);
    }
    getBilhetes();

    //setItemEquipe("Todas");
    setRifa("");

    async function getEquipes() {
      const responseEquipes = await api.get("/equipes");

      setEquipesAll(responseEquipes.data);
      //setEquipesSelecionadas(responseEquipes.data);
    }
    getEquipes();

    async function retornaRifas() {
      const rifas = await api.get("/rifas");
      setAllRifas(rifas.data);
    }
    retornaRifas();

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
        <div className="col s12 m6">
          <label className="active" for="rifa">Rifa:</label>
          <select            
            id="rifa"
            type="text"
            value={rifaId}
            onChange={onChangeRifa}
            className="input-field browser-default"
          >
            <option value="">Selecione...</option>
            {allRifas.map((data) => (
              <option value={data.rifa_id}>{data.titulo}</option>
            ))}
          </select>
        </div>
        <label class="active" for="equipeSelecionada">
          Equipes:
        </label>
        <div className="col s12 m6">
          <select
            id="equipeSelecionada"
            type="submit"
            value={equipesItem}
            onChange={onChangeEquipe}
            className="input-field browser-default"
          >
            <option value="">Selecione...</option>
            {equipesSelecionada.map((data) => (
              <option value={data.equipe}>{data.equipe}</option>
            ))}
          </select>
        </div>
        <div class="container">
          <div class="section">
            <div>
              <h6 class="sec-tit"><b>Bilhetes da equipe:</b> {equipesItem}</h6>
            </div>
            <div className="conteiner">                
              {bilhetesEquipe.map((data) => (
                <div
                  onClick={() => {
                    setIdBilhete(data._id)
                    if(data.status){
                      alert("Está sendo feito uma tela para vizualizar os detalhes da venda.")
                    }else{
                      window.location.href = `/cadastro-Bilhete/${data._id}`;
                    }
                  }}
                  className="conteinerBilhetes"
                >
                  <BoxBilhete
                    numero={data.bilhete}
                    data={data.bilheteVenda[0].dataVenda}
                    status={data.status}
                  />
                </div>   
              ))}
            </div>
          </div>
        </div>
      </div>
      <MenusFixos />
    </>
  );
}

export default ConsultaBilhetes;