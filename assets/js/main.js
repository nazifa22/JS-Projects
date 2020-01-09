function check() {
	document.getElementById("after_submit").style.visibility = "visible";
	var correct_answers = 0;
	var Q1 = document.getElementById('textbox').value;
	var Q2 = document.quiz.question2.value;
	var Q3 = document.quiz.question3.value;
	console.log(Q2);
	Q1 = Q1.toLowerCase();
	if(Q1 === 'cascading style sheets') {
		correct_answers++;
	}
	if(Q2 === 'Yes') {
		correct_answers++;
	}
	if(Q3 === 'Separate each selector with a comma') {
		correct_answers++;
	}
	if(correct_answers >= 1 && correct_answers <=2) {
		document.getElementById('picture').src = 'assets/images/meh.jpeg';
		document.getElementById('number_correct').innerHTML = `You got ${correct_answers} correct answer! Give some more affort`;
	}
	if(correct_answers === 3) {
		document.getElementById('picture').setAttribute('src', 'assets/images/win.gif')
		document.getElementById('number_correct').innerHTML = `Hurray! You got all the answers correct :D`;
	}
	if(correct_answers < 1) {
		document.getElementById('picture').src = 'assets/images/lose.gif'
		document.getElementById('number_correct').innerHTML = `Opps! You really need to work hard`;
	}
}

// function check(){

// 	var question1 = document.quiz.question1.value;
// 	var question2 = document.quiz.question2.value;
// 	var question3 = document.quiz.question3.value;
// 	var correct = 0;


// 	if (question1 == "Providence") {
// 		correct++;
// }
// 	if (question2 == "Hartford") {
// 		correct++;
// }	
// 	if (question3 == "Albany") {
// 		correct++;
// 	}
	
// 	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
// 	var messages = ["Great job!", "That's just okay", "You really need to do better"];
// 	var score;

// 	if (correct == 0) {
// 		score = 2;
// 	}

// 	if (correct > 0 && correct < 3) {
// 		score = 1;
// 	}

// 	if (correct == 3) {
// 		score = 0;
// 	}

// 	document.getElementById("after_submit").style.visibility = "visible";

// 	document.getElementById("message").innerHTML = messages[score];
// 	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
// 	document.getElementById("picture").src = pictures[score];
// 	}