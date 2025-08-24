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

const themeBtn = document.getElementById("theme-btn");
const popup = document.getElementById("theme-popup");
const colorPicker = document.getElementById("color-picker");
const positionSelect = document.getElementById("position-select");
const saveBtn = document.getElementById("save-theme");
const closeBtn = document.getElementById("close-popup");

// Open popup
themeBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

// Close popup (X)
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Save settings
saveBtn.addEventListener("click", () => {
  // Change theme color
  document.body.style.setProperty("--primary-color", colorPicker.value);

  // Change button position (with rotation)
  if (positionSelect.value === "left") {
    themeBtn.style.left = "10";
    themeBtn.style.right = "auto";
    themeBtn.style.transform = "translateY(-50%) rotate(-90deg)";
    themeBtn.style.transformOrigin = "left center";
  } else {
    themeBtn.style.right = "10px";
    themeBtn.style.left = "auto";
    themeBtn.style.transform = "translateY(-50%) rotate(90deg)";
    themeBtn.style.transformOrigin = "right center";
  }

  // Close popup
  popup.style.display = "none";
});

const hamburger = document.getElementById("hamburger");
const navUl = document.querySelector("nav ul");
const navImg = document.querySelector("nav img");
const navButtons = document.querySelector("nav div.buttons");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("active");
  navImg.classList.toggle("active");
  navButtons.classList.toggle("active");
});
