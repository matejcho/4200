function submitAnswers() {

	var total = 5;
	var score = 0;
	
	
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;


	for (var i = 1; i <= total; i++) {
		if(eval("q" + i) == null || eval("q" + i) == "") {
			alert("You missed question " + i);
			return false;
		}
	}
	
	
	var answers = ['b', 'a', 'd', 'b', 'd'];	
	
	
	
	for (var i = 1; i <= total; i++) {
		if (eval("q" + i) == answers[i - 1]) {
			score++;
		}
	}

	var startTime = (new Date()).getTime();

    
	var results = document.getElementById("results");
	results.innerHTML ='<h3>You Scored <span> '+score+' </span> out of <span>'+total+'</span> </h3>';
    alert('You Scored '+score+' out of '+total);
    
	return false;
}
var arr = [];
window.onbeforeunload = function(){
var d = new Date();
var n = d.getTime();
arr.push(n);
var diff= n-arr[0];
var sec = diff/1000;
var r = Math.round(sec);
return "Time spent on page: "+r+" seconds";
};
function myFunction() {
var d = new Date();
var n = d.getTime();
arr.push(n);
}