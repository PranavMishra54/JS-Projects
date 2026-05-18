let questions = [];
let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function fetchQuestions() {
  fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    .then(res => res.json())
    .then(data => {
      questions = data.results.map(q => {
        const allOptions = [...q.incorrect_answers, q.correct_answer];
        const shuffled = allOptions.sort(() => Math.random() - 0.5);
        return {
          question: decodeHTML(q.question),
          options: shuffled.map(decodeHTML),
          answer: shuffled.indexOf(decodeHTML(q.correct_answer))
        };
      });
      loadQuestion();
    });
}

function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((opt, index) => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.onclick = () => checkAnswer(index);
    optionsEl.appendChild(li);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.textContent = `Your score: ${score}/${questions.length}`;
}

nextBtn.onclick = loadQuestion;
fetchQuestions();