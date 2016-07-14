var randomQuestions = [ 
	{
		question: "1. Where did I leave my heart?",
		answer: "San Francisco"
	},
	{
		question: "2. Who won the World Series in 2010, 2012, and 2014?",
		answer: "The San Francisco Giants"
	},
	{
		question: "3. What month is the hottest in San Francisco?",
		answer: "October"
	},
	{
		question: "4. What color is the Golden Gate Bridge?",
		answer: "Red"
	},
	{
		question: "5. How big is San Francisco?",
		answer: "7 miles squared"
	},
	{
		question: "6. Who is the mayor of San Francisco?",
		answer: "Ed Lee"
	},
	{
		question: "7. What is the tallest building in San Francisco?",
		answer: "Trans America building"
	},
	{
		question: "8. Where is the highest elevation in San Francisco?",
		answer: "Twin Peaks"
	},
	{
		question: "9. What is the name of the biggest park in San Francisco?",
		answer: "Golden Gate Park"
	},
	{
		question: "10. Who is Karl?",
		answer: "The Fog"
	}

]

for(i = 0; i < randomQuestions.length; i++) {
	q = randomQuestions[i].question
	document.getElementById('question' + [i]).textContent = q
}

function testResults() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < randomQuestions.length; i++) {	
		var answer = randomQuestions[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'correct'
			correct++
		} else {
			questionSpot.className = 'incorrect'
			incorrect++
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}

document.onkeydown = function(e){
	
   if(e.keyCode == 13){ 
   	e.preventDefault();
   	testResults();
   }
};


