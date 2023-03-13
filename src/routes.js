import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import ResetSenha from './pages/Login/ResetSenha';
import Login from './pages/Login';
import NovoCadastro from './pages/Login/NovoCadastro';
import CadastroEquipe from './pages/Tarefas/cadastrarEquipe';
import Home from './pages/Home';
import Usuarios from './pages/Usuarios';
import CadastroUsuario from './pages/Usuarios/cadastroUsuario';
import Reestruturacao from './pages/Tarefas/Equipes';
import { isAuthenticated } from './auth';
import GerenciarRifas from './pages/GerenciarRifas/gerenciar-rifas';
import CadastrarRifa from './pages/GerenciarRifas/cadastrar-rifa';

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
        <Route exact path="/cadastroUsuario">
          <CadastroUsuario />
        </Route>

        <PrivateRoute path="/Home" component={() => <Home />} />
        <PrivateRoute path="/Usuarios" component={() => <Usuarios />} />
        <PrivateRoute path="/Equipes" component={() => <Reestruturacao />} />
        <PrivateRoute path="/Gerenciar-rifas" component={() => <GerenciarRifas />} />
        <PrivateRoute path="/Cadastrar-rifa" component={() => <CadastrarRifa />} />
      </Switch>
    </BrowserRouter>
  );
}

export default route;
