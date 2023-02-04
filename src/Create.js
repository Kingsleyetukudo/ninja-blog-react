import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author };

    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("blog added");
      setIsPending(false);
    });
  };

  return (
    <div className="create">
      <h2>Create Blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}></textarea>

        <label>Blog blog</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="">Select Author</option>
          <option value="kingsley">Kingsley</option>
          <option value="Esther">Esther</option>
          <option value="Victoria">Victoria</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding...</button>}
      </form>
    </div>
  );
};

export default Create;
