import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
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
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
};

export default BlogList;
