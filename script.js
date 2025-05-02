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
function startGame() {
  document.getElementById("bg-music").play(); // Ensures music starts after interaction
  // continue with stage 1 setup...
}
let currentStage = 1;
const stages = {
  1: {
    question: "The code to enter the building is the sum of 135 + 246 + 189. What is it?",
    answer: 570
  },
  2: {
    question: "Disarm the alarm: What is 721 + 134?",
    answer: 855
  },
  // Add stages 3–8 here
};
function loadStage(stageNum) {
  const stage = stages[stageNum];
  if (!stage) {
    document.getElementById("game-stage").innerHTML = "<h2>You completed the heist! 🎉</h2>";
    return;
  }

  document.getElementById("game-stage").innerHTML = `
    <h2>Stage ${stageNum}</h2>
    <p>${stage.question}</p>
    <input type="number" id="answer" placeholder="Enter your answer" />
    <button onclick="submitAnswer()">Submit</button>
    <p id="feedback"></p>
  `;
}
function submitAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const correctAnswer = stages[currentStage].answer;
  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    playSound("sound-success");
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "lime";

    setTimeout(() => {
      playSound("sound-unlock");
      currentStage++;
      loadStage(currentStage);
    }, 1500);
  } else {
    playSound("sound-error");
    feedback.textContent = "❌ Try again.";
    feedback.style.color = "red";
  }
}
function startGame() {
  document.getElementById("bg-music").play();
  loadStage(currentStage);
}

