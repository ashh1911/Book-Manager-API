# 📚 Book Manager API

A simple RESTful API to manage a list of books using Node.js, Express.js, and MongoDB.

## 🚀 Features

- Add new books
- View all books
- Update book details
- Delete books

## 🛠️ Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB
- Frontend: (Optional) HTML + JS / React

---

## 📦 API Endpoints

All endpoints are prefixed with `/api/books`

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | `/api/books`       | Get all books       |
| POST   | `/api/books`       | Add a new book      |
| PUT    | `/api/books/:id`   | Update a book       |
| DELETE | `/api/books/:id`   | Delete a book       |

---

## 📂 Project Structure

```
Book Manager Api/
│
├── server/
│   ├── app.js
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   └── Book.js
│   └── routes/
│       └── Books.js
│
├── .env
├── package.json
```

---

## ⚙️ How to Run

### 1. Clone the repo

```bash
git clone <your-repo-link>
cd "Book Manager Api"
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up `.env`

```env
MONGO_URI=mongodb://localhost:27017/bookmanager
PORT=5000
```

### 4. Start the server

```bash
node server/app.js
```

> Server runs on: [http://localhost:5000](http://localhost:5000)

---

## 🧪 Sample Request

**POST /api/books**

```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "year": 1988
}
```

---

## 📘 License

MIT