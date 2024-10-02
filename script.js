function toggleAnswer(index) {
  const answer = document.getElementById(`answer-${index}`);
  const toggle = answer.previousElementSibling.querySelector(".faq-toggle");

  if (answer.style.display === "block") {
    answer.style.display = "none";
    toggle.textContent = "+";
  } else {
    answer.style.display = "block";
    toggle.textContent = "-";
  }
}