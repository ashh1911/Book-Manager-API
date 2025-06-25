import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: ""
  });

  const API_URL = "http://localhost:5000/api/books";

  const fetchBooks = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setFormData({ title: "", author: "", year: "" });
    fetchBooks();
  };

  return (
    <div className="App">
      <h1> Book Manager</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
        <input type="text" id="author" value={formData.author} onChange={handleChange} placeholder="Author" required />
        <input type="number" id="year" value={formData.year} onChange={handleChange} placeholder="Year" required />
        <button type="submit">Add Book</button>
      </form>
      <ul>
        {books.map(book => (
          <li key={book._id}>{book.title} by {book.author} ({book.year})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
