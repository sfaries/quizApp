document.ready(function(){

//Factory Function
function createQuestion = function(params){
	validateParams(params)
	var obj = {
		questions: params.question,
		selections: params.selections,
		questionNumber: params.questionNum,
		correct: params.correctAnswer,
		rationale: params.rationale,

	}
	return obj
}

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
]

//Global Variables

var numberCorrect = 0;
var currentQuestion = 0;

/*Constructor Function

function QuestionTemplate(question, selections, questionNum, correct, rationale){
	this.question = question;
	this.selections = selections;
	this.questionNum = question number;
	this.correct = correct answer;
	this.rationale = why the answer is correct;
}

var q1 = new QuestionTemplate('question 1', ['selection 1', 'selection 2', 'selection 3', etc.])

*/

/*Factory function

function questionTemplate(question, selections, questionNum, correct, rationale){
	var q = {};
	q.question = question;
	q.selections = selections;
	q.questionNum = question number;
	q.correct = correct answer;
	q.rationale = why the answer is correct;
	q.createQuestion = function(){
		return this.question + this.selections + this.questionNum + this.correct + this.rationale
	} 

	return q;

}

var q1 = questionTemplate("Question number 1", ['selection 1', 'selection 2', etc.])
var q2 = questionTemplate()
var q3 = questionTemplate()
var q4 = questionTemplate()
var q5 = questionTemplate()
*/

/*Questions array

*** I dont think i need this now, do I? ***

var questions = [q1, q2, q3, q4, q5]

*/
});
