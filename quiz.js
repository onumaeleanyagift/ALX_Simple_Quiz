function checkAnswer() {
  let correctAnswer = "4";
  let userAnswer = document.querySelector('input[name="quiz"]:checked');
  let feedback = document.getElementById("feedback");

  if (!userAnswer) {
    feedback.textContent = "Please select an answer.";
    feedback.style.color = "orange";
    return;
  }

  userAnswer = userAnswer.value;
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "red";
  }
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
