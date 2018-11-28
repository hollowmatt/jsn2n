// JS for the quiz
(function() {
  //Questions we'll ask
  const myQuestions = [
    {
      question: "If you could have one power, what would it be?",
      answers: {
        a: "Live Forever",
        b: "Infinite Strength",
        c: "Infinite intelligence"
      }
    },
    {
      question: "If you could only have one season, which would you choose?",
      answers: {
        a: "Winter",
        b: "Summer",
        c: "Spring"
      }
    },
    {
      question: "If you had a pet, which would it be?",
      answers: {
        a: "Cat",
        b: "Dog",
        c: "Snake"
      }
    }
  ];

  //recommendation key from question responses.
  const recommendations = [
    { aaa : "A Gift from Bob" }, 
    { aab : "Old Yeller" },
    { aac : "Jurrasic Park" },
    { aba : "Born Free" },
    { abb : "Clifford the Big Red Dog" },
    { abc : "Anaconda" },
    { aca : "A Ghost in the Darkness" },
    { acb : "Dances with Wolves" },
    { acc : "Godzilla" },
    { baa : "Watchmen" },
    { bab : "Game of Thrones" },
    { bac : "Jurrasic World" },
    { bba : "The Mummy" },
    { bbb : "Mad Max" },
    { bbc : "Micro" },
    { bca : "My Life in a Cat House" },
    { bcb : "Return of the King" },
    { bcc : "A Dance with Dragons" },
    { caa : "Farmer Smart's fat cat" },
    { cab : "I Know you Know" },
    { cac : "Snakemaster" },
    { cba : "Cat Poems" },
    { cbb : "What the Dog Knows" },
    { cbc : "Silicon Snake Oil" },
    { cca : "The Algonquin Cat" },
    { ccb : "A Good Dog: The Story of Orson" },
    { ccc : "Adventures with Apples and Snakes" }
  ];

  //Function to build the quiz from the JSON data
  function buildQuiz() {
    const output = [];
    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];
      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }
      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  //Function to show the recommendation based on the answer key
  function showRecommendation() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let answerKey = "";
    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      answerKey += userAnswer;
    });
    console.log(answerKey);
    recommendation = findBook(answerKey, recommendations);
    resultsContainer.innerHTML = `You should really read: <br/><div class="title"> ${recommendation} </div>`;
  }

  function findBook(key, value) {
    var i, len = value.length;
    
    for (i = 0; i < len; i++) {
        if (value[i] && value[i].hasOwnProperty(key)) {
            return value[i][key];
        }
    }
    
    return -1;
  }

  //This will show a question
  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  //show next question
  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  //show previous question
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show recommendations
  submitButton.addEventListener("click", showRecommendation);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
