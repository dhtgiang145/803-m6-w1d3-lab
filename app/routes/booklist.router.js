module.exports = function (app) {
  var booklist = require("../controllers/booklist.controller.js");

  app.post("/api/book", booklist.createBook);
  app.get("/api/book/:id", booklist.getBook);
  app.get("/api/books", booklist.books);
  app.put("/api/book", booklist.updateBook);
  app.delete("/api/book/:id", booklist.deleteBook);
};
