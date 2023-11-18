const buttons = [
    document.querySelector('[data-js="answer-button1"]'),
    
    document.querySelector('[data-js="answer-button3"]'),
    
    document.querySelector('[data-js="answer-button5"]'),
  ];
  
  const answers = [
    document.querySelector('[data-js="answer-box1"]'),
    
    document.querySelector('[data-js="answer-box3"]'),
    
    document.querySelector('[data-js="answer-box5"]'),
  ];
  
  const bookmarkButton1 = document.querySelector('[data-js="bookmark-button1"]');
  
  const bookmarkButton3 = document.querySelector('[data-js="bookmark-button3"]');
  
  const bookmarkButton5 = document.querySelector('[data-js="bookmark-button5"]');
  
  buttonText(buttons, "Show Answer");
  
  // FUNCTIONS
  function buttonText(arr, txt) {
    i = 0;
    for(let i =0; i<arr.length; i++){
      buttons[i].textContent = txt;
      buttons[i].addEventListener("click", () => {
        answers[i].classList.toggle("hidden");
        buttons[i].textContent = showHideToggle(i);
      });
    }
  }
  
  function showHideToggle(i) {
    if (buttons[i].textContent === "Show Answer") {
      return "Hide Answer";
    }
    return "Show Answer";
  }
  
  
  bookmarkButton1.addEventListener("click", () => {
    bookmarkButton1.classList.toggle("clicked");
  });
  

  bookmarkButton3.addEventListener("click", () => {
    bookmarkButton3.classList.toggle("clicked");
  });
  

  bookmarkButton5.addEventListener("click", () => {
    bookmarkButton5.classList.toggle("clicked");
  });
  