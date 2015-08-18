$(document).ready(function(){

//Global Variables

var numberCorrect = 0;
var currentQuestion = 0;


////****////  Event Listeners  ////****//// 


//Click to Start

$('#startButton').on('click', function(){
	$('.startQuiz').hide();
	$('#castleOnTheHill').hide();
	$('.questionContainer').show();
	$('.questionButtons').show();
	$('.cityButton').hide();
	$('#submit').show();
	$('.rationale').show();
});

//Submit Answer

$('#submit').on('click', function(){
	addButton();
	currentQuestion++;
	newQuestion();
	
});

//Retake button

$('#takeAgain').on('click', function(){
	currentQuestion = 0;
	numberCorrect = 0;
	firstQuestion();
});


////****////  Functions  ////****////


//Initial Page load

function loadPage() {
$('.questionContainer').hide();
$('.questionButtons').hide();
$('.cityButton').hide();
$('.rationale').hide();
$('.footer').hide();
$('#submit').hide();
$('#takeAgain').hide();

}

//New Question Function

function newQuestion(){
	if (currentQuestion < 5) {
		$('.question').remove();
		$('.answerContainer input').remove();
		$('#explanation').hide();		
		var nextQ = '<span class = "question">' + questions[currentQuestion].questions + '</span><br><div id="answerContainer"><input type = "radio" name = "selections" class = "selections" value = "0"> <span class = "answer">' + questions[currentQuestion].selections[0] + '</span><br><input type = "radio" name = "selections" class = "selections" value = "1"> <span class = "answer">' + questions[currentQuestion].selections[1] + '</span><br><input type = "radio" name = "selections" class = "selections" value = "2"> <span class = "answer">' + questions[currentQuestion].selections[2] + '</span><br><input type = "radio" name = "selections" class = "selections" value = "3"> <span class = "answer">' + questions[currentQuestion].selections[3] + '</span><br></div>';

		$('.questionContainer').html(nextQ);
		var explanation = questions[currentQuestion - 1].rationale;
		$('#explanation').html(explanation).show();

	}
	else {
		finalScore();
		
	}
}

//Add city buttons 

function addButton() {
	var answer = $("input[type= 'radio']:checked").val();
	if (answer == questions[currentQuestion].correct) {
		numberCorrect++;
	}

	$('.cityButton').show();

	if (numberCorrect === 0){
		$('#buttonOne').hide();
		$('#buttonTwo').hide();
		$('#buttonThree').hide();
		$('#buttonFour').hide();
		$('#buttonFive').hide();
	}

	if (numberCorrect == 1){
		$('#buttonOne').show();
		$('#buttonTwo').hide();
		$('#buttonThree').hide();
		$('#buttonFour').hide();
		$('#buttonFive').hide();
	}

	if (numberCorrect == 2){
		$('#buttonOne').show();
		$('#buttonTwo').show();
		$('#buttonThree').hide();
		$('#buttonFour').hide();
		$('#buttonFive').hide();
	}

	if (numberCorrect == 3){
		$('#buttonOne').show();
		$('#buttonTwo').show();
		$('#buttonThree').show();
		$('#buttonFour').hide();
		$('#buttonFive').hide();
	}

	if (numberCorrect == 4){
		$('#buttonOne').show();
		$('#buttonTwo').show();
		$('#buttonThree').show();
		$('#buttonFour').show();
		$('#buttonFive').hide();
	}

	if (numberCorrect == 5){
		$('#buttonOne').show();
		$('#buttonTwo').show();
		$('#buttonThree').show();
		$('#buttonFour').show();
		$('#buttonFive').show();
	}

}

//Function that displays score and allows to retake

function finalScore(){
	$(".question").remove();
	$(".answerContainer").remove();
	$('.selections').remove();
	$('.answer').remove();
	var explanation = questions[4].rationale;
	$('#explanation').html(explanation).show();
	$('#submit').hide();
	$('#takeAgain').show();
	var score = '<span id = "score"> You correctly answered ' + numberCorrect + ' question(s)!';
	$('#answerContainer').html(score);
	
}

//Returns to First Question after retake

function firstQuestion(){
	$('.questionContainer').show();
	$('.questionButtons').show();
	$('#submit').show();
	var firstQ = '<span class = "question">' + questions[currentQuestion].questions + '</span><br><div id="answerContainer"><input type = "radio" name = "selections" class = "selections" value = "0"> <span class = "answer">' + questions[currentQuestion].selections[0] + '</span><br><input type = "radio" name = "selections" class = "selections" value = "1"> <span class = "answer">' + questions[currentQuestion].selections[1] + '</span><br><input type = "radio" name = "selections" class = "selections" value = "2"> <span class = "answer">' + questions[currentQuestion].selections[2] + '</span><br><input type = "radio" name = "selections" class = "selections" value = "3"> <span class = "answer">' + questions[currentQuestion].selections[3] + '</span><br></div>';
	$('.questionContainer').html(firstQ);
	$('#takeAgain').hide();
	$('#explanation').hide();
	$('.cityButton').hide();

}


////***  Factory Function and Question Object  ***//// 


//Factory Function

var createQuestion = function(params){
	//validateParams(params)
	var obj = {
		questions: params.question,
		selections: params.selections,
		questionNumber: params.questionNum,
		correct: params.correctAnswer,
		rationale: params.rationale,

	};
	return obj;
};

//Initialization

var questions = [
	createQuestion({
		question: "What year was Baltimore City College founded?",
		selections: [
			"1970",
			"1870",
			"1839",
			"1902",
		],
		questionNum: 0,
		correctAnswer: 2,
		rationale: "Baltimore City College is the third oldest public high school in the US!",
	}),
	createQuestion({
		question: "What does Palmam Qui Meruit Ferat mean?",
		selections: [
			"Honor to the one who earns it",
			"Honor to Castle on the Hill",
			"City Forever and for always",
			"Always do your best",
		],
		questionNum: 1,
		correctAnswer: 0,
		rationale: "Literally means Let him who earns it, bear the palm",
	}),
	createQuestion({
		question: "When was the first City-Poly football game played?",
		selections: [
			"1929",
			"1889",
			"1903",
			"1899",
		],
		questionNum: 2,
		correctAnswer: 1,
		rationale: "One of the oldest high school football rivalries in the country!",
	}),
	createQuestion({
		question: "Where is the City-Poly game played each year?",
		selections: [
			"Ravens Stadium",
			"Memorial Stadium",
			"Camden Yards",
			"Alternates between City and Poly homefields",
		],
		questionNum: 3,
		correctAnswer: 0,
		rationale: "One of the few high school games given the priviledge to play at M & T Bank",
	}),
	createQuestion({
		question: "When did City field its first Lacrosse team?",
		selections: [
			"1945",
			"1900",
			"1879",
			"1916",
		],
		questionNum: 4,
		correctAnswer: 2,
		rationale: "City has the oldest high school lacrosse team in the state of Maryland!",
	}),
];

loadPage();

});