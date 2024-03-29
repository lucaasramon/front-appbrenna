import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import ResetSenha from './pages/Login/ResetSenha';
import Login from './pages/Login';
import NovoCadastro from './pages/Login/NovoCadastro';
import EditarEquipe from './pages/Tarefas/editarEquipe';
import CadastroEquipe from './pages/Tarefas/cadastrarEquipe';
import Home from './pages/Home';
import Bilhete from './pages/bilhete';
import CadastroBilhete from './pages/bilhete/cadastroBilhete';
import ConsultaBilhetes from "./pages/ConsultaBilhetes";
import Usuarios from './pages/Usuarios';
import CadastroUsuario from './pages/Usuarios/cadastroUsuario';
import Equipes from './pages/Tarefas/Equipes';
import { isAuthenticated } from './auth';
import GerenciarRifas from './pages/GerenciarRifas';
import CadastrarRifa from './pages/GerenciarRifas/cadastroRifa';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (isAuthenticated() ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />)} />
);

function route() {
  return (
    <BrowserRouter>
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
        <Route exact path="/cadastroEquipe">
          <CadastroEquipe />
        </Route>
        <Route exact path="/editarEquipe/:id">
          <EditarEquipe />
        </Route>
        <Route exact path="/cadastroUsuario">
          <CadastroUsuario />
        </Route>
        <Route exact path="/baixa-Bilhete">
          <Bilhete />
        </Route>
        <Route exact path="/cadastro-Bilhete/:id">
          <CadastroBilhete />
        </Route>
        <Route exact path="/Gerenciar-rifas">
          <GerenciarRifas />
        </Route>
        <Route exact path="/Cadastrar-rifa">
          <CadastrarRifa />
        </Route>
        <Route exact path="/ConsultaBilhetes">
          <ConsultaBilhetes />
        </Route>
        <Route exact path="/ConsultaBilhetes/:equipe">
          <ConsultaBilhetes />
        </Route>

        <PrivateRoute path="/Home" component={() => <Home />} />
        <PrivateRoute path="/Usuarios" component={() => <Usuarios />} />
        <PrivateRoute path="/Equipes" component={() => <Equipes />} />
        <PrivateRoute path="/ConsultaBilhetes" component={() => <ConsultaBilhetes />} />
        <PrivateRoute path="/ConsultaBilhetes" component={(equipe) => <ConsultaBilhetes />} />
      </Switch>
    </BrowserRouter>
  );
}

export default route;
