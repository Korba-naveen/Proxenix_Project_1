const form = document.getElementById("feedbackForm");
const button = document.getElementById("submitBtn");

function isFormValid() {
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  return name && email.includes("@") && message.length > 2;
}

// Listen to input changes
form.addEventListener("input", () => {
  if (isFormValid()) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
});

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!isFormValid()) return;

  document.getElementById("response").textContent = "Thank you for your feedback!";
  form.reset();
  button.classList.remove("show");
});
