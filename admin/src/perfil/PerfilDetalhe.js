import { useParams, useHistory } from "react-router-dom";
import useFetch from "../useFetch";
import { useState } from "react";

const PerfilDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:3000/user/" + id);

  const history = useHistory();
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [interesses, setInteresses] = useState("");

  const handleClcikUp = (e) => {
    e.preventDefault();
    const blog = { nome, descricao, interesses };
    console.log(blog);
    fetch("http://localhost:3000/user/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div classnome="create">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <form>
          <div className="container-details-blog">
            <h1>{blog.nome}</h1>
            <input
              placeholder="nome"
              type="text"
              required
              /*  value={blog.name} */
              onChange={(e) => setNome(e.target.value)}
            />
            <h2>{blog.descricao}</h2>
            <textarea
              placeholder="apresentação"
              required
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            ></textarea>


            <h2>{blog.interesses}</h2>
            <textarea
            placeholder="interesses"
              required
              value={interesses}
              onChange={(e) => setInteresses(e.target.value)}
            ></textarea>
    
          </div>


            <div className="buttons-update">
              <button onClick={handleClcikUp}>update</button>
            </div>
    
        </form>
      )}
    </div>
  );
};

export default PerfilDetails;
