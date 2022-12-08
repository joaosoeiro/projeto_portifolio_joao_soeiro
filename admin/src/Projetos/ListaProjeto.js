import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="perfil-list">
     <div className="TitleBlogs">
        <h2>{title}</h2>
      </div>
  
      {console.log(blogs)}
      <div className="containerBlog">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.nome}</h2>
            <p>{blog.descricao}</p>
            {/*<button onClick={() => handleDelete(blog.id)}>delete blog</button>*/}
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
};

export default BlogList;
