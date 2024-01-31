const form = document.getElementById("book-form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const booklist = document.getElementById("book-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (title.value == "" && author.value == "" && year.value == "") {
    alert("Please write something");
  } else {
    const newEle = document.createElement("section");

    const newTitle = document.createElement("div");
    newTitle.innerHTML = title.value;
    newEle.appendChild(newTitle);

    const newAuthor = document.createElement("div");
    newAuthor.innerHTML = author.value;
    newEle.appendChild(newAuthor);

    const newYear = document.createElement("div");
    newYear.innerHTML = year.value;
    newEle.appendChild(newYear);

    title.value = "";
    author.value = "";
    year.value = "";

    booklist.appendChild(newEle);
  }
});
