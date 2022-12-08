import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { nome, descricao };
    console.log(blog)
    setIsPending(true)

    fetch("http://localhost:3000/portfolio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
  
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      history.push('/')
    });
  };

  return (
    <div className="create">
      <h2>Criar Novo Projeto</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome do Projeto:</label>
        <input
          type="text"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label>Descrição do Projeto:</label>
        <textarea
          required
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        ></textarea>
      {/*   <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select> */}
        { !isPending && <button>Cadastrar </button>}
        { isPending && <button disabled > {console.log(nome,descricao)} Cadastrando...</button>}
      </form>
    </div>
  );
};

export default Create;
