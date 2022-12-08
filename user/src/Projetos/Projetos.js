import { useParams} from "react-router-dom";
import useFetch from "../useFetch";


const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:3000/portfolio/" + id);


  return (
    <div className="create">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <form>
          <div className="container-details-blog">
             
            <p>Nome do projeto:</p>
            <h1>{blog.nome}</h1>
            <p>Descrição:</p>
            <h2>{blog.descricao}</h2>
          </div>
        </form>
      )}
    </div>
  );
};

export default BlogDetails;
