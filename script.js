function toggleBooks(id) {
  const list = document.getElementById(id);
  list.classList.toggle("show");
}

function openBook(link) {
  window.open(link, "_blank");
}

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  themeToggle.textContent = body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
});

document.getElementById("searchInput").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const bookLists = document.querySelectorAll(".book-list");

  bookLists.forEach((ul) => {
    let hasMatch = false;
    const books = ul.querySelectorAll("li");

    books.forEach((book) => {
      const text = book.textContent.toLowerCase();
      if (text.includes(filter)) {
        book.style.display = "block";
        hasMatch = true;
      } else {
        book.style.display = "none";
      }
    });

    if (filter === "") {
      ul.classList.remove("show");
    } else if (hasMatch) {
      ul.classList.add("show");
    } else {
      ul.classList.remove("show");
    }
  });
});

themeToggle.textContent = body.classList.contains("dark-mode")
  ? "☀️"
  : "🌙";
