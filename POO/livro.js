class Book{
    constructor(title, pages,isbn){
        this.title = title
        this.pages = pages
        this.isbn = isbn
    }
}

let book = new Book('Algoritmos', '50', 'isbn')
console.log(book);