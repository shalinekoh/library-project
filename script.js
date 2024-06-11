// bookContainer = document.querySelector("book-container")
// card = document.querySelector("card")
const myLibrary = [];

function Book(title, author, page, read=true){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

function addBookToLibrary(book){
    myLibrary.push(book)
}

// SAMPLE BOOKS
book1 = new Book(
        title="Hello Beautiful (Oprah's Book Club)",
        author="Ann Napolitano",
        page=390
)
book2 = new Book(
    title="All the Sinners Bleed",
    author="S. A. Cosby",
    page=344
)
book3 = new Book(
    title="Lady Tan's Circle of Women",
    author="Lisa See",
    page=357
)
myLibrary.push(book1, book2, book3)

bookContainer = document.querySelector(".book-container")
// card = document.querySelector(".card")
function createBook(books){
    books.forEach((book) => {
        card = document.createElement("div");
        card.classList.add("card")

        closeButton = document.createElement("button");
        closeButton.setAttribute("id", "closeButton");
        closeButton.innerHTML = "X";
        card.appendChild(closeButton)

        const title = document.createElement("p");
        title.setAttribute("id", "title");
        title.innerHTML = book.title;
        card.appendChild(title)

        const author = document.createElement("p");
        author.setAttribute("id", "author");
        author.innerHTML = book.author;
        card.appendChild(author)

        const page = document.createElement("p");
        page.setAttribute("id", "page");
        page.innerHTML = book.page;
        card.appendChild(page)

        readButton = document.createElement("button");
        readButton.setAttribute("id", "readButton");
        readButton.innerHTML = "Read";
        card.appendChild(readButton)

        bookContainer.appendChild(card)
    }
    )
}

createBook(myLibrary)
