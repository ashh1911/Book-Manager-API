# 📘 Book Manager Frontend

This is the frontend for the **Book Manager** app built with React. It connects to a backend REST API to perform CRUD operations on a MongoDB database.

---

## 🚀 Features

- 📚 View all books  
- ➕ Add a new book (Title, Author, Year)  
- 🔄 Auto-refresh book list on submission  
- ⚡ Fast, responsive UI with React Hooks  

---

## 🧰 Tech Stack

- **Frontend**: React (Create React App)  
- **API Endpoint**: `http://localhost:5000/api/books`  
- **State**: React `useState`, `useEffect`  
- **HTTP Requests**: Native `fetch`  

---

## 📦 Installation

```bash
cd frontend
npm install
```

### 🏁 Run Locally

```bash
npm start
```

Make sure your backend is running (node server/app.js).

### 🔁 API Proxy (Optional)

In `frontend/package.json`:

```json
"proxy": "http://localhost:5000"
```

Then use:

```js
fetch("/api/books")
```

---

## 📁 Folder Structure

```pgsql
frontend/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

---

## 🧪 Example API Response

```json
[
  {
    "_id": "12345",
    "title": "Book Title",
    "author": "Author Name",
    "year": "2023"
  }
]
```
