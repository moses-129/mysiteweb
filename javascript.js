/* === 1. GREETING FUNCTION ON PAGE LOAD === */
window.onload = function () {
  const greeting = document.getElementById("greeting");
  if (greeting) {
    const hour = new Date().getHours();
    let message = "";

    if (hour < 12) message = "Good morning!";
    else if (hour < 18) message = "Good afternoon!";
    else message = "Good evening!";

    greeting.textContent = message;
  }
};

/* === 2. FORM VALIDATION (Contact Page) === */
function validateContactForm(event) {
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10}$/;

  if (!emailPattern.test(email.value)) {
    alert("Please enter a valid email address.");
    email.focus();
    event.preventDefault();
    return false;
  }

  if (!phonePattern.test(phone.value)) {
    alert("Please enter a 10-digit phone number.");
    phone.focus();
    event.preventDefault();
    return false;
  }

  return true;
}

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", validateContactForm);
}

/* === 3. TOGGLE DARK/LIGHT MODE === */
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      themeToggle.textContent = "Light Mode";
    } else {
      themeToggle.textContent = "Dark Mode";
    }
  });
}

/* === 4. SHOW/HIDE PROJECT DETAILS === */
const toggleButtons = document.querySelectorAll(".toggle-project");

toggleButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const target = document.getElementById(this.dataset.target);
    if (target.style.display === "none") {
      target.style.display = "block";
    } else {
      target.style.display = "none";
    }
  });
});

/* === 5. ACCESS / UPDATE DOM ELEMENTS === */
const pageTitle = document.querySelector("title");
if (pageTitle) {
  console.log("Page Title:", pageTitle.textContent);
}

/* === 6. EVENT LISTENERS FOR MOUSE / INPUT FOCUS === */
const inputs = document.querySelectorAll("input, textarea");

inputs.forEach((input) => {
  input.addEventListener("focus", function () {
    this.style.border = "2px solid #3498db";
  });
  input.addEventListener("blur", function () {
    this.style.border = "1px solid #ccc";
  });
});