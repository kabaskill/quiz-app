const answerButton1 = document.querySelector('[data-js="answer-button1"]');
const answerButton2 = document.querySelector('[data-js="answer-button2"]');
const answerButton3 = document.querySelector('[data-js="answer-button3"]');
const answerButton4 = document.querySelector('[data-js="answer-button4"]');
const answerButton5 = document.querySelector('[data-js="answer-button5"]');

const answerBox1 = document.querySelector('[data-js="answer-box1"]');
const answerBox2 = document.querySelector('[data-js="answer-box2"]');
const answerBox3 = document.querySelector('[data-js="answer-box3"]');
const answerBox4 = document.querySelector('[data-js="answer-box4"]');
const answerBox5 = document.querySelector('[data-js="answer-box5"]');

const bookmarkButton1 = document.querySelector('[data-js="bookmark-button1"]');
const bookmarkButton2 = document.querySelector('[data-js="bookmark-button2"]');
const bookmarkButton3 = document.querySelector('[data-js="bookmark-button3"]');
const bookmarkButton4 = document.querySelector('[data-js="bookmark-button4"]');
const bookmarkButton5 = document.querySelector('[data-js="bookmark-button5"]');

const bookmarkBox1 = document.querySelector('[data-js="bookmark1"]');
const bookmarkBox2 = document.querySelector('[data-js="bookmark2"]');
const bookmarkBox3 = document.querySelector('[data-js="bookmark3"]');
const bookmarkBox4 = document.querySelector('[data-js="bookmark4"]');
const bookmarkBox5 = document.querySelector('[data-js="bookmark5"]');

// const devButton = document.querySelector('[data-js="dev-button"]');
// devButton.addEventListener("click", () => {
//   bookmarkBox1.classList.toggle("hidden");
//   bookmarkBox2.classList.toggle("hidden");
//   bookmarkBox3.classList.toggle("hidden");
//   bookmarkBox4.classList.toggle("hidden");
//   bookmarkBox5.classList.toggle("hidden");
// });

answerButton1.addEventListener("click", () => {
  answerBox1.classList.toggle("hidden");
  console.log(answerBox1.classList.value);
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

// bookmarkButton1.addEventListener("click", () => {
//   bookmarkBox1.classList.toggle("hidden");
//   bookmarkButton1.classList.toggle("clicked");
// });

// bookmarkButton2.addEventListener("click", () => {
//   bookmarkBox2.classList.toggle("hidden");
//   bookmarkButton2.classList.toggle("clicked");
// });

// bookmarkButton3.addEventListener("click", () => {
//   bookmarkBox3.classList.toggle("hidden");
//   bookmarkButton3.classList.toggle("clicked");
// });

// bookmarkButton4.addEventListener("click", () => {
//   bookmarkBox4.classList.toggle("hidden");
//   bookmarkButton4.classList.toggle("clicked");
// });

// bookmarkButton5.addEventListener("click", () => {
//   bookmarkBox5.classList.toggle("hidden");
//   bookmarkButton5.classList.toggle("clicked");
// });
