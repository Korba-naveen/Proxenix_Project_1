document.getElementById("feedbackForm").addEventListener("submit", e => {
  e.preventDefault();

  const name     = document.getElementById("name").value.trim();
  const email    = document.getElementById("email").value.trim();
  const feedback = document.getElementById("feedback").value.trim();

  if (name && email && feedback) {
    const feedbackList = document.getElementById("feedbackList");

    const entry = document.createElement("div");
    entry.className = "feedback-entry";
    entry.innerHTML = `
      <strong>${name}</strong> &lt;${email}&gt;<br/>
      ${feedback}
    `;

    feedbackList.appendChild(entry);

    // Clear fields
    e.target.reset();
  }
});

