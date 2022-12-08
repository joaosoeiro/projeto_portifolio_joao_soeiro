import ListarProjeto from "../Projetos/ListarProjeto";
import useFetch from "../useFetch";


const Home = () => {
  const { data: blogs, isPending, error} = useFetch('http://localhost:3000/portfolio')

  return (
    <div className="home">
    
   
    {error && <div>{ error }</div>}
    { isPending && <div>Loading...</div>}
    { blogs && <ListarProjeto blogs={blogs} title="Todos os Projetos!" /> }
    </div>
  );
};

export default Home;
