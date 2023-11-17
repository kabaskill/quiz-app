const buttons = [
  document.querySelector('[data-js="answer-button1"]'),
  document.querySelector('[data-js="answer-button2"]'),
  document.querySelector('[data-js="answer-button3"]'),
  document.querySelector('[data-js="answer-button4"]'),
  document.querySelector('[data-js="answer-button5"]'),
];

const answers = [
  document.querySelector('[data-js="answer-box1"]'),
  document.querySelector('[data-js="answer-box2"]'),
  document.querySelector('[data-js="answer-box3"]'),
  document.querySelector('[data-js="answer-box4"]'),
  document.querySelector('[data-js="answer-box5"]'),
];

const bookmarkButton1 = document.querySelector('[data-js="bookmark-button1"]');
const bookmarkButton2 = document.querySelector('[data-js="bookmark-button2"]');
const bookmarkButton3 = document.querySelector('[data-js="bookmark-button3"]');
const bookmarkButton4 = document.querySelector('[data-js="bookmark-button4"]');
const bookmarkButton5 = document.querySelector('[data-js="bookmark-button5"]');

buttonText(buttons, "Show Answer");
// buttonEventListener(buttons);

// FUNCTIONS
function buttonText(arr, txt) {
  i = 0;
  while (i < arr.length) {
    buttons[i].textContent = txt;
    i++;
  }
}

function showHideToggle(i) {
  if (buttons[i].textContent === "Show Answer") {
    return "Hide Answer";
  }
  return "Show Answer";
}

// function buttonEventListener(arr) {
//   i = 0;
//   while (i < arr.length) {
//     buttons[i].addEventListener("click", () => {
//       console.log("did a thing");
//       answers[i].classList.toggle("hidden");
//       buttons[i].textContent = showHideToggle(i);
//     });
//     i++;
//   }
// }

buttons[0].addEventListener("click", () => {
  answers[0].classList.toggle("hidden");
  buttons[0].textContent = showHideToggle(0);
});

buttons[1].addEventListener("click", () => {
  answers[1].classList.toggle("hidden");
  buttons[1].textContent = showHideToggle(1);
});

buttons[2].addEventListener("click", () => {
  answers[2].classList.toggle("hidden");
  buttons[2].textContent = showHideToggle(2);
});

buttons[3].addEventListener("click", () => {
  answers[3].classList.toggle("hidden");
  buttons[3].textContent = showHideToggle(3);
});

buttons[4].addEventListener("click", () => {
  answers[4].classList.toggle("hidden");
  buttons[4].textContent = showHideToggle(4);
});

bookmarkButton1.addEventListener("click", () => {
  bookmarkButton1.classList.toggle("clicked");
});

bookmarkButton2.addEventListener("click", () => {
  bookmarkButton2.classList.toggle("clicked");
});

bookmarkButton3.addEventListener("click", () => {
  bookmarkButton3.classList.toggle("clicked");
});

bookmarkButton4.addEventListener("click", () => {
  bookmarkButton4.classList.toggle("clicked");
});

bookmarkButton5.addEventListener("click", () => {
  bookmarkButton5.classList.toggle("clicked");
});
