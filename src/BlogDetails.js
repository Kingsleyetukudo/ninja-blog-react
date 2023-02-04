import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  return (
    <div className="blog-details">
      <h2>Blog Details {id}</h2>
      <p></p>
    </div>
  );
};

export default BlogDetails;
