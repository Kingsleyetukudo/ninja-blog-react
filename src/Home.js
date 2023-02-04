import { useState } from "react";

const Home = () => {
  const [blogs, setBlog] = useState([
    { title: "My new Website", body: "lorem ipsum....", author: "king", id: 1 },
    {
      title: "web development",
      body: "lorem ipsum....",
      author: "free",
      id: 2,
    },
    { title: "just learning", body: "lorem ipsum....", author: "bro", id: 3 },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
