// bookContainer = document.querySelector("book-container")
// card = document.querySelector("card")
const myLibrary = [];

function Book(title, author, page, read){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

function addBookToLibrary(title, author, page){
    book = new Book(title, author, page);
    myLibrary.push(book);
    return myLibrary;
}

// SAMPLE BOOKS
addBookToLibrary(
        title="Hello Beautiful (Oprah's Book Club)",
        author="Ann Napolitano",
        page=390
)
addBookToLibrary(
    title="All the Sinners Bleed",
    author="S. A. Cosby",
    page=344
)
addBookToLibrary(
    title="Lady Tan's Circle of Women",
    author="Lisa See",
    page=357
)

bookContainer = document.querySelector(".book-container")
// card = document.querySelector(".card")
function createBook(books){
    books.forEach((book, index) => {

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
        card.appendChild(readButton);

        bookContainer.appendChild(card);

        closeButton.addEventListener("click", () => {
            myLibrary.splice(index, 1)
            displayBook(myLibrary);
        })

        readButton.addEventListener("click",  function(){
            book.read = !book.read
            this.innerHTML = book.read == true ? "Read" : "Not Read";
        })
    }
    )
}

const addBookButton = document.querySelector("header button");
const addBookDialog = document.getElementById("add-book-dialog");
const bookForm = document.getElementById("book-form");
const dialogCloseButton = document.getElementById("close-button");
const dialogClearButton = document.getElementById("clear-button");
const dialogSubmitButton = document.getElementById("enter-button");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pageInput = document.getElementById("page");
// const input = document.getElementById("title")

addBookButton.addEventListener("click", () => {
    addBookDialog.showModal();
})

dialogCloseButton.addEventListener("click", (event) => {
    event.preventDefault();
    addBookDialog.close();
})

dialogClearButton.addEventListener("click", (event) => {
    event.preventDefault();
    bookForm.reset();
})
dialogSubmitButton.addEventListener("click", (event) => {
    let isValid = bookForm.checkValidity();
    if (isValid) {
        event.preventDefault();
        const title = titleInput.value;
        const author = authorInput.value;
        const page = pageInput.value;
        library = addBookToLibrary(title, author, page);
        displayBook(library);
        addBookDialog.close();
    }
    else {
        bookForm.reportValidity();
    }
})



function displayBook(myLibrary){
    bookContainer.innerHTML = "";
    createBook(myLibrary);
}
displayBook(myLibrary)
