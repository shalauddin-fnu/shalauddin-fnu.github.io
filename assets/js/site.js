document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const navigation = document.querySelector(".site-nav");

  if (toggle && navigation) {
    toggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    navigation.addEventListener("click", (event) => {
      if (event.target.matches("a")) {
        navigation.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.querySelectorAll(".quiz").forEach((quiz) => {
    const correctAnswer = quiz.dataset.answer;
    const feedback = quiz.querySelector(".quiz-feedback");

    quiz.querySelectorAll("[data-choice]").forEach((choice) => {
      choice.addEventListener("click", () => {
        const isCorrect = choice.dataset.choice === correctAnswer;

        quiz.querySelectorAll("[data-choice]").forEach((button) => {
          button.classList.remove("is-correct", "is-incorrect");
        });

        choice.classList.add(isCorrect ? "is-correct" : "is-incorrect");

        if (feedback) {
          feedback.textContent = isCorrect
            ? "Correct."
            : "Not quite. Try another answer.";
        }
      });
    });
  });
});