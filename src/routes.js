import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import ResetSenha from "./pages/ResetSenha";
import Login from "./pages/Login";
import NovoCadastro from "./pages/NovoCadastro";
import Home from "./pages/Home";
import Usuarios from "./pages/Usuarios";
import Reestruturacao from "./pages/Tarefas/ReestruturaçãoCognitiva";
import { isAuthenticated } from "./auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
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
        
        <PrivateRoute path="/Home" component={() => <Home />} />
        <PrivateRoute path="/Usuarios" component={() => <Usuarios />} />
        <PrivateRoute path="/ReestruturaçãoCognitiva" component={() => <Reestruturacao />} />

      </Switch>
    </BrowserRouter>
  );
};

export default route