const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const cors = require('cors')
const { initDB } = require('./dbConfig');
const { getAllBooks, addBook,getBooksByID,updateBookById,deleteBookByID} = require('./controllers/bookscontroller');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors())
app.get("/books", getAllBooks);
app.post("/books", addBook);
app.get("/books/:bookID",getBooksByID)
app.put("/books/:bookID",updateBookById)
app.delete("/books/:bookID",deleteBookByID)
initDB();

app.listen(8000, () => {
    console.log("Server started successfully");
});
