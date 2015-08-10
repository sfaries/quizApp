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
		question: "Question number 1?",
		selections: [
			"Answer 1",
			"Answer 2",
			"Answer 3",
			"Answer 4",
		],
		questionNum: 1,
		correctAnswer: "Correct Answer is",
		rationale: "The reason why...",
	}),
	createQuestion({
		question: "Question number 2?",
		selections: [
			"Answer 1",
			"Answer 2",
			"Answer 3",
			"Answer 4",
		],
		questionNum: 2,
		correctAnswer: "Correct Answer is",
		rationale: "The reason why...",
	}),
	createQuestion({
		question: "Question number 3?",
		selections: [
			"Answer 1",
			"Answer 2",
			"Answer 3",
			"Answer 4",
		],
		questionNum: 3,
		correctAnswer: "Correct Answer is",
		rationale: "The reason why...",
	}),
	createQuestion({
		question: "Question number 4?",
		selections: [
			"Answer 1",
			"Answer 2",
			"Answer 3",
			"Answer 4",
		],
		questionNum: 4,
		correctAnswer: "Correct Answer is",
		rationale: "The reason why...",
	}),
	createQuestion({
		question: "Question number 5?",
		selections: [
			"Answer 1",
			"Answer 2",
			"Answer 3",
			"Answer 4",
		],
		questionNum: 5,
		correctAnswer: "Correct Answer is",
		rationale: "The reason why...",
	}),
]



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
