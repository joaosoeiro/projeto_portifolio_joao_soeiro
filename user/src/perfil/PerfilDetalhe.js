import { useParams } from "react-router-dom";
import useFetch from "../useFetch";


const PerfilDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:3000/user/" + id);

  return (
    <div className="create">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <form>
          <div className="container-details-blog">
            <p>Nome:</p>
            <h1>{blog.nome}</h1>
            <p>Apresentação:</p>
            <h2>{blog.descricao}</h2>
            <p></p>
            <p>Interesses principais em:</p>
            <h2>{blog.interesses}</h2>
          </div>
        </form>
      )}
    </div>
  );
};

export default PerfilDetails;
