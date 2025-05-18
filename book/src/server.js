const express = require("express");
const BookModel = require("./model/book");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/books", async (req, res) => {
    const books = await BookModel.findAll();
    res.json(books);
});

app.get("/books/:id", async (req, res) => {
    const { id } = req.params;
    const selectedBook = await BookModel.findByPk(id);

    if (!selectedBook) {
        return res.status(404).json({ error: `Book ${id} not found.` });
    }

    res.status(200).json(selectedBook);
});

app.post("/books", async (req, res) => {
    const { title, author, isbn, publisher } = req.body;

    if (!title || !author || !isbn || !publisher) {
        return res.status(400).json({ error: "All fields are required." });
    }

    const createdBook = await BookModel.create({ title, author, isbn, publisher });
    res.status(201).json(createdBook);
});

app.put("/books/:id", async (req, res) => {
    const { id } = req.params;
    const { title, author, isbn, publisher } = req.body;

    const selectedBook = await BookModel.findByPk(id);
    if (!selectedBook) {
        return res.status(404).json({ error: `Book ${id} not found.` });
    }

    await selectedBook.update({ title, author, isbn, publisher });
    res.json({ message: "Book successfully updated.", selectedBook });
});

app.delete("/books/:id", async (req, res) => {
    const { id } = req.params;

    const selectedBook = await BookModel.findByPk(id);
    if (!selectedBook) {
        return res.status(404).json({ error: `Book ${id} not found.` });
    }

    await selectedBook.destroy();
    res.json({ message: `Book ${id} successfully deleted.` });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});