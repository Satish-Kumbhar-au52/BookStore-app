const Booksmodel = require('../models/Book')

const getAllBooks = async (request, response) => {
    try {
      const books = await Booksmodel.find()
      response.send({ status: 'success', books })
    } catch (err) {
      response.status(500).send({ status: 'error', msg: 'error fetching movies' })
    }
  }
  
  const getBooksByID = async (request, response) => {
    const { bookID } = request.params
  
    try {
      const book = await Booksmodel.findById(bookID)
      if (!book) {
        response.status(404).send({ status: 'error', msg: 'book not found' })
      } else {
        response.send({ status: 'success', book: book })
      }
    } catch (err) {
      console.log("Error fetching books from DB")
      response.status(500).send({ status: 'error', msg: 'Error fetching books from DB' })
    }
  }

const addBook = async (req, res) => {
    const { name, author, description, price, available,image } = req.body;
    try {
        const book = new Booksmodel({
            name,
            author,
            description,
            price,
            available,
            image,
        });
        await book.save();
        return res.status(201).json({ book });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Unable to add the book' });
    }
}
const updateBookById = async (request, response) => {
    const { bookID } = request.params
    const updatedBookData = request.body //{language, name, id}
    try {
      const updateBook = await Booksmodel.findByIdAndUpdate(bookID, updatedBookData, { new: true, runValidators: true }) //to perform schema validations input operation add runValidators as true
      response.send({ status: 'Updated Successfully', book: updateBook })
    } catch (err) {
      response.status(500).send({ status: 'error', msg: 'Cannot Update Book' })
    }
  }
  
  const deleteBookByID = async (request, response) => {
    const { bookID } = request.params
    try {
      const deletedbook = await Booksmodel.findByIdAndDelete(bookID)
      response.send({ status: 'Deleted Successfully', movie: deletedbook })
    } catch (err) {
      response.status(500).send({ status: 'Cannot delete movie due to internal error' })
    }
  }

module.exports = {
    getAllBooks,
    addBook,
    getBooksByID,
    updateBookById,
    deleteBookByID
}
