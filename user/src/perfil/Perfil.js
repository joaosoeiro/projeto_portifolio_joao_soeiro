import ListarPerfil from "./ListarPerfil"
import useFetch from "../useFetch";

const Perfil = () => {
  const { data: blogs, isPending, error} = useFetch('http://localhost:3000/user')


  return (
    <div className="home">
    {error && <div>{ error }</div>}
    { isPending && <div>Loading...</div>}
    { blogs && <ListarPerfil blogs={blogs} /> }
    </div>
  );
};

export default Perfil;
