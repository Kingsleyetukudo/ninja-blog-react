import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {Error && <h2> {error}</h2>}
      {isLoading && <div> Loading... </div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "king")}
        title="Kings Blogs"
      /> */}
    </div>
  );
};

export default Home;
