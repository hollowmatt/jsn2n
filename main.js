// JS for the quiz
function question() {
	const question = "What is your favorite book?"
	const answer = prompt(question);
	alert(`You answered ${answer}`);
}
const startQuiz = document.querySelector('.startQuiz');
startQuiz.addEventListener('click', question);