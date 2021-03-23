
function shelfBook(book, shelf){
  if(shelf.length > 2){
    return
  }
  shelf.unshift(book)
}

function unshelfBook(bookName, shelf){
  bookIndex = shelf.findIndex(book => book.title === bookName)
  shelf.splice(bookIndex, 1)
}

function listTitles(shelf){
  return shelf.map(book => book.title).join(', ')
}

function searchShelf(shelf, title){
  book = shelf.find(el => el.title === title)
  return book ? true : false;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};