
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projeto from "./Projetos/Projeto";
import PerfilDetalhe from "./perfil/PerfilDetalhe";
import CriarProjeto from "./Projetos/CriarProjeto";
import Navbar from "./main/Navbar";
import Home from "./main/Home";
import Login from "./main/login";


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      
        <div className="content">
          <Switch>
          
            <Route exact path="/">
       
              <Home />
            </Route>

            <Route path="/create">
              <CriarProjeto />
            </Route>

            <Route path="/login">
              <Login/>
            </Route>

            <Route path="/blogs/:id">
              <Projeto />
            </Route>

            <Route path="/user/:id">
              <PerfilDetalhe />
            </Route>

       
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
