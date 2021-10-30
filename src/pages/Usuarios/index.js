import React, { useEffect, useState } from "react";
import $ from 'jquery';
import '../../App.css';
import MenusFixos from "../menusFixos";
import MenuLateral from '../menuLateral/menuLateral'
import api from "../../server/api";



function Usuarios() {

    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        async function getUser() {
            const response = await api.get('/usuario')

            setAllUsers(response.data)
        }

        getUser()
    }, [])


    function AbrirDetalhes(e){
        e.preventDefault();

        $("#modal2").modal('show')
    }

    return (
        <>
            <MenuLateral />
            <div class="container z-depth-1 subpages collection  cardFiltro">

                <div class="row ">
                    <div class="col s12 pad-0">
                        <h5 class="bot-20 sec-tit">Usuarios</h5>
                    </div>
                </div>
                <hr />
                <div className="col s10 offset-s1">
                    <label for="">Filtros</label>
                </div>
                <div className="input-field col s10 offset-s1">
                    <input id="" type="text" className="" />
                    <label for="">Nome</label>
                </div>
                <div className="input-field col s10 offset-s1">
                    <input id="" type="text" className="" />
                    <label for="">Idade</label>
                </div>
                <div className="input-field col s10 offset-s1">
                    <input id="" type="text" className="" />
                    <label for="">Telefone</label>
                </div>
                <div className="btn-novo">
                    <a class="waves-effect waves-light btn brown lighten-2">Novo Usuario</a>
                </div>

            </div>

            <div class="container">
                <div class="section">
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
                                    {allUsers.map(data => (
                                        <tr>
                                            <td>{data.nome}</td>
                                            <td>{data.idade}</td>
                                            <td>{data.numero}</td>
                                            <td>
                                                <a class="waves-effect waves-light btn brown lighten-2">Detalhes</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <div className="row ">
                <div className="col s12 pad-0">
                    <a onClick={AbrirDetalhes} className="waves-effect waves-light btn modal-trigger">Nested Modal</a>

                    <div id="modal2" className="modal">
                        <div className="modal-content">
                            <h4>Modal Header</h4>
                            <p>The red ball sat proudly at the top of the toybox. It had been the last to be played with and anticipated it would be the next as well. The other toys grumbled beneath. At one time each had held the spot of the red ball, but over time they had sunk deeper and deeper into the toy box.</p>

                            <a className="waves-effect waves-light btn modal-trigger" href="#modal4">Inner Modal</a>

                        </div>
                        <div className="modal-footer">
                            <a href="#!" className="modal-close waves-effect waves-red btn-flat">Disagree</a>
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                        </div>
                    </div>
                </div>
            </div> */}
            <MenusFixos />
        </>
    )
}

export default Usuarios;