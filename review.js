// JS for the quiz
(function() {
  //Setup books
  const books = {};

  //Setup book affinity.
  const affinity = {};

  //Function to build the quiz from the JSON data
  function buildTiles() {
    const output = [];
    // for each book...
          
    imageContainer.innerHTML = output.join("");
  }

  //Function to show the recommendation based on the answer key
  function showRecommendation() {
    resultsContainer.innerHTML = `You should really read: <br/><div class="title"> ${recommendation} </div>`;
  }

  //This will show a grid of books
  function showImages(n) {
    
  }

  //show next grid
  function showNextImages() {
    
  }

  //show previous question
  function showPreviousImages() {
    
  }

  const imageContainer = document.getElementById("image");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildTiles();
    
  // on submit, show recommendations
  submitButton.addEventListener("click", showRecommendation);
})();
