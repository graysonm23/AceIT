import axios from "axios";
const BaseUrl = process.env.REACT_APP_API;
export default {
  // Gets all books from Google Books API
  getBooks: function(value) {
    console.log(BaseUrl);
    return axios.get(BaseUrl + value);
  },
  // Gets all Books from database
  getAllBooks: function() {
    return axios.get("/api/books/");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log(bookData);
    return axios.post("/api/books", bookData);
  }
};
