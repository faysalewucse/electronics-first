const toolbar = document.getElementById("toolbar");
const searchBtn = document.getElementById("search-btn");
const closeBtn = document.getElementById("close-btn");
const searchField = document.getElementById("search-field");

function toggleToolbar() {
  if (toolbar.classList.contains("hidden")) {
    toolbar.classList.remove("hidden");
  } else toolbar.classList.add("hidden");
}

searchBtn.addEventListener("click", () => {
  closeBtn.classList.remove("hidden");
  searchField.classList.add("fullWidth");
  searchField.style.width = "100%";
});

closeBtn.addEventListener("click", () => {
  closeBtn.classList.add("hidden");
  searchField.classList.remove("fullWidth");
  searchField.style.width = "10%";
});
