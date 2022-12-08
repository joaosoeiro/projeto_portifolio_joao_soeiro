import { Link } from 'react-router-dom'
import Perfil from "../perfil/Perfil";

const Navbar = () => {
  return (
    <nav className="navbar">
       <Perfil />
      <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">Criar Projeto</Link>
      </div>
    </nav>
  );
};

export default Navbar;

