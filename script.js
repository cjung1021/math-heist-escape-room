function startGame() {
  document.getElementById("game-stage").innerHTML = `
    <h2>Stage 1: The Codepad</h2>
    <p>The code to enter the building is the sum of 135 + 246 + 189. What is it?</p>
    <input type="number" id="answer" placeholder="Enter your answer" />
    <button onclick="checkAnswer()">Submit</button>
    <p id="feedback"></p>
  `;
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const correctAnswer = 135 + 246 + 189;
  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedback.textContent = "✅ Correct! Moving to the next stage...";
    feedback.style.color = "lime";
    // Add logic here to go to the next stage
  } else {
    feedback.textContent = "❌ Try again.";
    feedback.style.color = "red";
  }
}

