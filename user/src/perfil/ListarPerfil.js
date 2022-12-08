import { Link } from "react-router-dom";

const PerfilList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="perfil-list">
      <h2>{title}</h2>
  
      {console.log(blogs)}
      {blogs.map((blog) => (
        <div className="Perfil" key={blog.id}>
          <Link className="PerfilLink" to={`/user/${blog.id}`}>
            <h2>{blog.nome}</h2>
            <div className="editar-perfil">
              <strong >Sobre Mim</strong>
            </div>
            {/*<button onClick={() => handleDelete(blog.id)}>delete blog</button>*/}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PerfilList;
