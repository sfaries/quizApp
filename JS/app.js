document.ready(function(){

//Questions array
var questions = [q1, q2, q3, q4, q5]



//Object.create() OOP - not sure if this makes sense for this assignment
var qTemplate = {
	question: "Question asked",
	selections: "possible answers",
	questionNum: "do I need this, or is it in the array?",
	correct: "The correct response",
	rationale: "Why the answer is correct"
}

var q1 = Object.create(qTemplate);
	q1.question = "Question number 1";
	q1.selections = "question 1 possible answers";
	q1.questionNum = "Question 1";
	q1.correct = "Correct answer to number 1";
	q1.rationale = "The correct answer to 1 is because...";




//Factory function
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


//Constructor Function

function QuestionTemplate(question, selections, questionNum, correct, rationale){
	this.question = question;
	this.selections = selections;
	this.questionNum = question number;
	this.correct = correct answer;
	this.rationale = why the answer is correct;
}

var q1 = new QuestionTemplate('question 1', ['selection 1', 'selection 2', 'selection 3', etc.])





});
