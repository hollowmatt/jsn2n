// JS for the quiz
function question() {
	const  quiz = [
								 ["What is Superman's real name?", "Clark Kent"],
								 ["What is Wonder Woman's real name?", "Diana Prince"],
								 ["What is Batman's real name?", "Bruce Wayne"]
								];
	let score = 0;
	for([question,answer] of quiz) {
		const response = prompt(question);
		if(response === answer) {
			score++;
		}
	}

	alert(`You answered ${score} questions correctly.`);
}
const startQuiz = document.querySelector('.startQuiz');
startQuiz.addEventListener('click', question);