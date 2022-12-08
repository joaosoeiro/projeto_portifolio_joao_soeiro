
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projetos from "./Projetos/Projetos";
import PerfilDetalhe from "./perfil/PerfilDetalhe";
import Navbar from "./main/Navbar";
import Home from "./main/Home";


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

            <Route path="/blogs/:id">
              <Projetos />
            </Route>

            <Route path="/user/:id">
              <PerfilDetalhe />
            </Route>

            <Route path="*">
          
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
