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
            bookCard.className = 'col';
            bookCard.innerHTML = `
            <div class="book">
                <div class="book-top">
                    <h3 class="book-title">${myLibrary[i].title}</h3>
                    <p class="book-author">Author: ${myLibrary[i].author}</p>
                </div>
                <div class="book-bottom">
                    <div class="book-progress">
                        <p class="pages-read">Current page: ${myLibrary[i].currentPage} / ${myLibrary[i].pages}</p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated w-75" role="progressbar" aria-valuenow="${myLibrary[i].currentPage}" aria-valuemin="0" aria-valuemax="${myLibrary[i].pages}"></div>
                        </div>
                    </div>
                </div>
            </div>
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