//need document ready function 

var questions = [];

$('#startButton').on('click', function() {

	$('#startButton').hide();
	selectQuestion();
   
   		 var game = {

		    q1: function(){	
				$("#question").html("What song did Elton John play with Miss Piggy and the Electric Mayhem in season 2 of The Muppet Show?");
				$("#1").html("Rocket Man");
				$("#2").html("Don't go Breaking my Heart");
				$("#3").html("Crocodile Rock");
				$("#4").html("Bennie & the Jets");
				//answer "Don't go Breaking my Heart"
			},


			q2: function(){
				$("#question").html("What instrument does Janice, the only female in Electric Mayhem, play?");
				$("#1").html("Keyboards");
				$("#2").html("Bass");
				$("#3").html("Guitar");
				$("#4").html("Harmonica");
				//answer "Guitar"
			},

			q3: function(){
				$("#question").html("What are the names of the ever-heckling curmudgeons who sit in the balcony?");
				$("#1").html("Statler & Waldorf");
				$("#2").html("Bert & Ernie");
				$("#3").html("Enoch & Salinger");
				$("#4").html("Atticus & Renley");
				//answer "Statler & Waldorf"
			},

			q4: function(){
				$("#question").html("In the film The Great Muppet Caper, what is Kermit and Fozzie's relationship?");
				$("#1").html("Best Friends");
				$("#2").html("Cousins");
				$("#3").html("Boyfriends");
				$("#4").html("Twins");
				//answer "Twins"	
			},

			q5: function(){
				$("#question").html("Where is Miss Piggy from?");
				$("#1").html("North Carolina")
				$("#2").html("Iowa");
				$("#3").html("Nebraska");
				$("#4").html("Indiana");
				//answer "Iowa"				
			},
		};	


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
				//
			}	
		};


});
