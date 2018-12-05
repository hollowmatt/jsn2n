// JS for the quiz
(function() {
  //Questions we'll ask
  const myImages = [
    {
      images: {
        a: "images/01_beach.jpeg",
        b: "images/01_gym.jpeg",
        c: "images/01_movie.jpeg",
        d: "images/01_reading.jpeg"
      }
    },
    {
      images: {
        a: "images/02_winter.jpeg",
        b: "images/02_summer.jpeg",
        c: "images/02_spring.jpeg",
        d: "images/02_fall.jpeg"
      }
    },
    {
      images: {
        a: "images/03_cat.jpeg",
        b: "images/03_dog.jpeg",
        c: "images/03_bird.jpeg",
        d: "images/03_snake.jpeg"
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

  //Function to build the image boxes from the JSON data
  function buildImages() {
    const output = [];
    myImages.forEach((currentSet, answerNumber) => {
      const selections = [];
      for(letter in currentSet.images) {
        console.log(`${answerNumber} : ${letter} : ${currentSet.images[letter]}`);
        //build the grid
        selections.push(
          `<div class="box">
            <div class="boxInner">
              <img class='${letter}'src='${currentSet.images[letter]}' />
            </div>
          </div>`
        );
      }
      //add to output
      output.push(
        `<div class="wrap">
          ${selections.join("")}
        </div>` 
      );
    });
    imageContainer.innerHTML = output.join("");
  }

  //Function to show the recommendation based on the answer key
  function showRecommendation() {
    let answers ="";
    answerKey.forEach((answer) => {
      answers +=answer; //console.log(answerKey.join(""));
    });
    recommendation = findBook(answers, recommendations);
    resultsContainer.innerHTML = `You should really read: <br/><div class="title"> ${recommendation} </div>`;
  }

  //Function to find a book in the array of answers based on answer given
  function findBook(key, value) {
    console.log(`${key} : ${value}`);
    var i, len = value.length;
    
    for (i = 0; i < len; i++) {
        if (value[i] && value[i].hasOwnProperty(key)) {
            return value[i][key];
        }
    }
    
    return -1;
  }

  //This will show a set of images
  function showWrap(n) {
    wrap[currentWrap].classList.remove("active-wrap");
    wrap[n].classList.add("active-wrap");
    currentWrap = n;
  }

  //show next image set
  function showNextSlide() {
    showWrap(currentWrap + 1);
  }

  function recordEvent(e) {
    if (e.srcElement.className === 'd') {
      answerKey.push('c');
    } else {
      answerKey.push(e.srcElement.className);
    }

    if(currentWrap < wrap.length - 1) {
      showNextSlide();
    } else {
      imageContainer.style.display = "none";
      showRecommendation();
    }
  };
 

  const imageContainer = document.getElementById("image-container");
  const resultsContainer = document.getElementById("results");
 
  // display first set of images right away
  buildImages();

  const answerKey = [];
  const nextButton = document.getElementById("next");
  const wrap = document.querySelectorAll(".wrap");
  let currentWrap = 0;

  showWrap(0);

  const selectors = document.querySelectorAll('.boxInner');
  selectors.forEach(select => select.addEventListener('click', recordEvent));
})();
