const toggleCheckbox = document.getElementById("theme-toggle-checkbox");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleCheckbox.checked = true;
}

toggleCheckbox.addEventListener("change", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
