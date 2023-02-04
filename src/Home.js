import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new Website", body: "lorem ipsum....", author: "king", id: 1 },
    {
      title: "web development",
      body: "lorem ipsum....",
      author: "free",
      id: 2,
    },
    { title: "just learning", body: "lorem ipsum....", author: "bro", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "king")}
        title="Kings Blogs"
      />
    </div>
  );
};

export default Home;
