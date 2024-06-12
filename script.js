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