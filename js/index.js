const answerButton1 = document.querySelector('[data-js="answer-button1"]');
const answerButton2 = document.querySelector('[data-js="answer-button2"]');
const answerButton3 = document.querySelector('[data-js="answer-button3"]');
const answerButton4 = document.querySelector('[data-js="answer-button4"]');
const answerButton5 = document.querySelector('[data-js="answer-button5"]');

const answerBox1 = document.querySelector('[data-js="answer-box1"]');
const answerBox2 = document.querySelector('[data-js="answer-box1"]');
const answerBox3 = document.querySelector('[data-js="answer-box1"]');
const answerBox4 = document.querySelector('[data-js="answer-box1"]');
const answerBox5 = document.querySelector('[data-js="answer-box1"]');

answerButton1.addEventListener("click", () => {
  answerBox1.classList.toggle("hidden");
});

answerButton2.addEventListener("click", () => {
  answerBox2.classList.toggle("hidden");
});

answerButton3.addEventListener("click", () => {
  answerBox3.classList.toggle("hidden");
});

answerButton4.addEventListener("click", () => {
  answerBox4.classList.toggle("hidden");
});

answerButton5.addEventListener("click", () => {
  answerBox5.classList.toggle("hidden");
});
