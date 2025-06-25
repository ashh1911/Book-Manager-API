const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const Book = require("../models/Book");
const bookRoutes = require("../routes/Books");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use("/api/books", bookRoutes);

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Book API Integration Tests", () => {
  let bookId;

  it("should create a book", async () => {
    const res = await request(app).post("/api/books").send({
      title: "Test Book",
      author: "Test Author",
      year: 2023,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Test Book");
    bookId = res.body._id;
  });

  it("should get all books", async () => {
    const res = await request(app).get("/api/books");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should update the book", async () => {
    const res = await request(app).put(`/api/books/${bookId}`).send({
      title: "Updated Book",
      author: "Updated Author",
      year: 2025,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Updated Book");
  });

  it("should delete the book", async () => {
    const res = await request(app).delete(`/api/books/${bookId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Book deleted");
  });
});
