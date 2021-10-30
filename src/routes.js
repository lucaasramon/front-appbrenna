import react from "react";
import { Switch, Route } from "react-router-dom";
import ResetSenha from "./pages/ResetSenha";
import Login from "./pages/Login";
import NovoCadastro from "./pages/NovoCadastro";
import Home from "./pages/Home";
import Usuarios from "./pages/Usuarios";
import Reestruturacao from "./pages/Tarefas/ReestruturaçãoCognitiva";

export default () => {

    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route exact path="/ResetSenha">
                <ResetSenha />
            </Route>
            <Route exact path="/NovoCadastro">
                <NovoCadastro />
            </Route>
            <Route exact path="/Home">
                <Home />
            </Route>
            <Route exact path="/Usuarios">
                <Usuarios />
            </Route>
            <Route exact path="/ReestruturaçãoCognitiva">
                <Reestruturacao />
            </Route>
        </Switch>
    );
}