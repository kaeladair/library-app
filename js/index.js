// Make sure that the document has loaded
document.addEventListener("DOMContentLoaded", function() {
    let myLibrary = [];

    function Book(title, author, pages, currentPage) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.currentPage = currentPage;
    }

    function addBookToLibrary() {
        let title = document.getElementById('bookTitle').value;
        let author = document.getElementById('bookAuthor').value;
        let pages = document.getElementById('bookPages').value;
        let currentPage = document.getElementById('currentPage').value;

        let newBook = new Book(title, author, pages, currentPage);
        myLibrary.push(newBook);

        // Reset form fields
        document.getElementById('bookTitle').value = "";
        document.getElementById('bookAuthor').value = "";
        document.getElementById('bookPages').value = "";
        document.getElementById('currentPage').value = "";
    }

    function displayBooks() {
        const bookList = document.getElementById('bookList');
        bookList.innerHTML = '';

        for (let i = 0; i < myLibrary.length; i++) {
            let bookCard = document.createElement('div');
            bookCard.className = 'book';
            bookCard.innerHTML = `
                <h4 class="card-title">${myLibrary[i].title}</h5>
                <p class="card-text">${myLibrary[i].author}</p>
                <p class="card-text">${myLibrary[i].pages} pages</p>
                <p class="card-text">Current Page: ${myLibrary[i].currentPage}</p>
            `;
            bookList.appendChild(bookCard);
        }
    }

    // This line should be inside the "DOMContentLoaded" event listener
    document.getElementById('addBtn').addEventListener('click', function() {
        addBookToLibrary();
        displayBooks();
        $('#exampleModal').modal('hide');  // Use jQuery to hide the modal
    });
});