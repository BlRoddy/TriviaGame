//need document ready function 

var questions = [];
var rightAnswers = 0;
var wrongAnswers = 0;
var a1 = $("#1")
var a2 = $("#2")
var a3 = $("#3")
var a4 = $("#4")

$('#startButton').on('click', function() {

	$('#startButton').hide();
	
   
   		 var game = {

		    q1: function(){	
				$("#question").html("What song did Elton John play with Miss Piggy and the Electric Mayhem in season 2 of The Muppet Show?");
				$("#1").html("Rocket Man");
				$("#2").html("Don't go Breaking my Heart");
				$("#3").html("Crocodile Rock");
				$("#4").html("Bennie & the Jets");
				//answer "Don't go Breaking my Heart"
				checkAnswer(a2, a1, a3, a4)
			},


			q2: function(){
				$("#question").html("What instrument does Janice, the only female in Electric Mayhem, play?");
				$("#1").html("Keyboards");
				$("#2").html("Bass");
				$("#3").html("Guitar");
				$("#4").html("Harmonica");
				//answer "Guitar"
				checkAnswer(a3, a1, a2, a4)
			},

			q3: function(){
				$("#question").html("What are the names of the ever-heckling curmudgeons who sit in the balcony?");
				$("#1").html("Statler & Waldorf");
				$("#2").html("Bert & Ernie");
				$("#3").html("Enoch & Salinger");
				$("#4").html("Atticus & Renley");
				//answer "Statler & Waldorf"
				checkAnswer(a1, a2, a3, a4)
			},

			q4: function(){
				$("#question").html("In the film The Great Muppet Caper, what is Kermit and Fozzie's relationship?");
				$("#1").html("Best Friends");
				$("#2").html("Cousins");
				$("#3").html("Boyfriends");
				$("#4").html("Twins");
				//answer "Twins"	
				checkAnswer(a4, a1, a2, a3)
			},

			q5: function(){
				$("#question").html("Where is Miss Piggy from?");
				$("#1").html("North Carolina")
				$("#2").html("Iowa");
				$("#3").html("Nebraska");
				$("#4").html("Indiana");
				//answer "Iowa"		
				checkAnswer(a2, a1, a3, a4)		
			},
		};	

		selectQuestion();

		function selectQuestion(){
			if (questions.length < 5){	

				var question = "question" + Math.ceil(Math.random() * 5);

				while (questions.indexOf(question) !== -1){

					question = "question" + Math.ceil(Math.random() * 5);
				};
	
				questions.push(question);
				
				if (question == "question1"){
					game.q1();	
				}
				else if (question == "question2"){
					game.q2();			
				}
				else if (question == "question3"){
					game.q3();				
				}
				else if (question == "question4"){
					game.q4();				
				}
				else if (question == "question5"){
					game.q5();				
				}	
			 }
			
			else{

				gameOver();
				
			}	
		};

		function checkAnswer(correct, wrong1, wrong2, wrong3){

			$(correct).click(function(){

				rightAnswers++
				selectQuestion();
			});

			$(wrong1).click(function(){

				wrongAnswers++
				selectQuestion();

			});

			$(wrong2).click(function(){

				wrongAnswers++
				selectQuestion();
				
			});

			$(wrong3).click(function(){

				wrongAnswers++
				selectQuestion();
				
			});

		};




});
