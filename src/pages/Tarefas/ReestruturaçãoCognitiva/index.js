import React, { useEffect, useState } from "react";
import '../../../App.css';
import MenusFixos from "../../menusFixos";
import MenuLateral from '../../menuLateral/menuLateral'

function Usuarios() {

    return (
        <>
            <MenuLateral />
            <div class="container z-depth-1 subpages collection  cardFiltro">

                <div class="row ">
                    <div class="col s12 pad-0">
                        <h5 class="bot-20 sec-tit">Reestruturação Cognitiva</h5>
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
                    <label for="">Data</label>
                </div>
                <div className="btn-novo">
                    <a class="waves-effect waves-light btn brown lighten-2">Nova Reestruturação Cognitiva</a>
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
                                        <tr>
                                            <td>teste</td>
                                            <td>teste</td>
                                            <td>teste</td>
                                            <td>
                                                <a class="waves-effect waves-light btn brown lighten-2">Detalhes</a>
                                            </td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <MenusFixos />
        </>
    )
}
export default Usuarios;