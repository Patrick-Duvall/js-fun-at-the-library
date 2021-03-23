var {
  shelfBook,
  unshelfBook,
  searchShelf
} = require("./shelf.js")

class Library {
  constructor(name) {
    this.name = name;
    this.shelves = {fiction: [], fantasy: [], nonFiction: []}
  }
}

function createLibrary(libraryName){
  return new Library(libraryName)
}

function addBook(library, book) {
  let genre = book.genre
  let shelf = library.shelves[genre]
  shelfBook(book, shelf)
}

function checkoutBook(library, title, genre){
  var shelf = library.shelves[genre]
  var bookPresent = searchShelf(shelf, title)
  if(!bookPresent){
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
  }

  unshelfBook(title, shelf)
  return `You have now checked out ${title} from the ${library.name}`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};