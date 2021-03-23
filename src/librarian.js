const { checkoutBook } = require("./library");
const { searchShelf } = require("./shelf");

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library
  }

  greetPatron(name, morning=false) {
    if(morning){
      return 'Good morning, ' + name + '!' 
    }
    return 'Hello, ' + name + '!'
  }

  findBook(title) {
    let shelf = Object.values(this.library.shelves).flat()
    let libraryHasBook = searchShelf(shelf, title)
    if(libraryHasBook){
      var genres = Object.keys(this.library.shelves)
      for(var i in genres){
        checkoutBook(this.library, title, genres[i])
      }
      return `Yes, we have ${title}`
    }
    return `Sorry, we do not have ${title}`
  }

  calculateLateFee(daysLate) {
    return Math.ceil(daysLate *.25)
  }
}



module.exports = Librarian;

