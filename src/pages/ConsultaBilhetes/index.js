import React, { useEffect, useState } from "react";
import api from "../../server/api";
import "../../App.css";
import MenusFixos from "..";
import MenuLateral from "../Home/MenuLateral/menuLateral";
import BoxBilhete from '../../components/BoxBilhete';

function ConsultaBilhetes() {
    const [bilhetesAll, setBilhetesAll] = useState([]);
    const [equipesAll, setEquipesAll] = useState([]);
    const [equipesItem, setItemEquipe] = useState();    
   
    function setEquipeItem(e) {
      const selectedValue = e.target.value;      
      setItemEquipe([...equipesItem, selectedValue]);   
      getBilhetesEquipe(selectedValue);        
    }

    function getBilhetesEquipe(equipe) {
      console.log(equipe);
      setBilhetesAll(bilhetesAll.filter((value, i) => i !== equipe));
    }

    function onSubmit(e) {
      e.preventDefault();

      //limpa o select de equipes
      setItemEquipe("");
    }
      
    useEffect(() => {
      async function getBilhetes() {
        const responseBilhetes = await api.get("/consultaBilhetes");  

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
          <form onSubmit={onSubmit}>
            <div className="col s10 offset-s1">
              <label for="">Filtrar</label>
            </div>
            <hr />
            <label class="active" for="">Equipes:</label>
            <div className="col s12 m6">
              <select id="equipeSelecionada" type="submit"
                value={equipesItem}
                onChange={setEquipeItem}                
                className="input-field browser-default">
                  <option value="Todas">Todas...</option>
                  {equipesAll.map((data) => (                  
                    <option value={data.equipe}>{data.equipe}</option>
                  ))}
              </select>              
            </div>
          
            <div class="container">
              <div class="section">
                <div >
                  <div >
                    <h6 class="sec-tit">Equipe: {equipesItem}</h6> 
                  </div>
                </div>              
                <div className="conteiner">
                {(equipesItem === 'Todas') 
                  ? (bilhetesAll.map((data) => (
                        <div className="conteinerBilhetes">
                          <BoxBilhete 
                            numero={data.bilhete}
                            data={data.bilheteVenda[0].dataVenda}
                          />
                        </div>
                      ))                   
                    )
                  : (bilhetesAll.map((data, equipe) => {
                        <div className="conteinerBilhetes">
                          <BoxBilhete 
                            numero={data.bilhete}
                            data={data.bilheteVenda[0].dataVenda}
                          />
                        </div> 
                      })    
                    )
                }
                </div>    
              </div>
            </div>
          </form>
        </div>
        <MenusFixos />
        </>
    );
}

export default ConsultaBilhetes;