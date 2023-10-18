//HERANÇA
class Book{
    constructor(title, pages, isbn){
        this.title = title
        this.pages = pages
        this.isbn = isbn
    }
}

let book = new Book('Algoritmos', '50', 'isbn')
console.log(book);

console.log('<---------------------------------->');

class ITBook extends Book{
    constructor(title, pages, isbn, technology){
        super(title, pages, isbn)
        this.technology = technology
    }
    printTechnology(){
        console.log(this.technology);
    }
}

const jsBook = new ITBook('Estrutura de dados', 248, 782564, 'JavaScript')
console.log(jsBook);
console.log(jsBook.title);
console.log(jsBook.printTechnology());
