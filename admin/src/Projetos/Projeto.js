import { useParams, useHistory } from "react-router-dom";
import useFetch from "../useFetch";
import { useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:3000/portfolio/" + id);
  const history = useHistory();
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleClcik = () => {
    fetch("http://localhost:3000/portfolio/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  const handleClcikUp = (e) => {
    e.preventDefault();
    const blog = { nome, descricao };
    console.log(blog);
    fetch("http://localhost:3000/portfolio/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="create">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <form>
          <div className="container-details-blog">
            <h1>{blog.nome}</h1>
            <input
              placeholder="nome do projeto"
              type="text"
              required
              /*  value={blog.name} */
              onChange={(e) => setNome(e.target.value)}

            />
            <h2>{blog.descricao}</h2>
            <textarea
              placeholder="descrição"
              required
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            ></textarea>

          </div>




            <div className="buttons-update">
              <button onClick={handleClcik}>Deletar</button>
              <button onClick={handleClcikUp}>Atualizar</button>
            </div>
       
        </form>
      )}
    </div>
  );
};

export default BlogDetails;
