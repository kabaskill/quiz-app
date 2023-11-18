const inputQuest = document.querySelector('[data-js="question"]');
const inputAnswer = document.querySelector('[data-js="answer"]');

const counterQ = document.querySelector('[data-js="counter-q"]');
const counterA = document.querySelector('[data-js="counter-a"]');

const submitButton = document.querySelector('[data-js="submit-card"]');
const cardForm = document.querySelector('[data-js="card-form"]');


cardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newCard = document.createElement("section");

  const cardContainer = document.querySelector(".card-container");
  console.log(cardContainer);
  
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  cardContainer.append(newCard);

  newCard.innerHTML = `<section class="question-box flex-col">
        <p>${data.cardQuestion}</p>

        <p data-js="answer-box5" class="answer">${data.cardAnswer}</p>

        <div class="tags">
            <p>
            <span class="tag">${data.cardTags}</span>
            </p>
        </div>

        <button
            aria-label="bookmark-symbol"
            type="button"
            class="bookmark-symbol"
            data-js="bookmark-button">
            <img src="/images/bookmark-regular.svg" alt="bookmark-symbol" height="30" />
        </button>
        </section>`;

  const bookmarkButton = newCard.querySelector('[data-js="bookmark-button"]');

  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("clicked");
  });
});

inputQuest.addEventListener("input", () => {
  maxLength = inputQuest.getAttribute("maxlength");
  const number = maxLength - inputQuest.value.length;
  counterQ.textContent = `${number} characters left`;
});

inputAnswer.addEventListener("input", () => {
  maxLength = inputAnswer.getAttribute("maxlength");
  const number = maxLength - inputAnswer.value.length;
  counterA.textContent = `${number} characters left`;
});
