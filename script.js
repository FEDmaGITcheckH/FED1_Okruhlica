function addBook() {
  let autor = document.getElementById("autor").value;
  let name = document.getElementById("name").value;
  let isbn = document.getElementById("isbn").value;
  let numberOfPages = document.getElementById("numberOfPages").value;
  let availableCopies = document.getElementById("availableCopies").value;
  let numberOfCopies = document.getElementById("numberOfCopies").value;
  let price = document.getElementById("price").value;

  const message = `
    Údaje boli odoslané do databázy
    Autor: ${autor}
    Názov: ${name}
    ISBN: ${isbn}
    Počet strán: ${numberOfPages}
    Dostupné kópie: ${availableCopies}
    Celkový počet kópií: ${numberOfCopies}
    Cena knihy: ${price}
  `;
  alert(message.trim());
}
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  addBook();
});

let books = [];

function add(event) {
  event.preventDefault();

  let book = {
    title: document.getElementById('name').value,
    author: document.getElementById('autor').value,
    copies: document.getElementById('numberOfCopies').value,
    pages: document.getElementById('numberOfPages').value,
    isbn: document.getElementById('isbn').value,
    price: document.getElementById('price').value,
  };
  books.push(book);
  save();
}

function deleteLast() {
  books.pop();
  save();
}

function deleteAllTitles() {
  books = [];
  save();
}

function save() {
  console.clear();
  console.log("----------------------------");
  console.log("Books in LMS:");
  console.log("----------------------------");
  for (let i = 0; i < books.length; i++) {
    console.log("Book " + (i + 1));
    console.log("Author: " + books[i].author);
    console.log("Title: " + books[i].title);
    console.log("Available copies: " + books[i].copies);
    console.log("Number of Pages: " + books[i].pages);
    console.log("ISBN: " + books[i].isbn);
    console.log("Price of Book: " + books[i].price + " Euro");
    console.log("___");
  }
}
