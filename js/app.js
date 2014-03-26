
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
	
	function calculate () {
		var i = parseInt($("#userGuess").val());
		var Rand = 50
		
		
		if (i === Rand){
			$("#feedback").text("success");
		}
		else if (i > (Rand) && i < (Rand+20)) {
			$("#feedback").text("Red Hot");
			}
		else if (i > (Rand+20) && i < (Rand + 30)){
			$("#feedback").text("Warmer");
			}
		else if (i > (Rand +30)){
			$("#feedback").text("Freezing... Brr...");
			}	
		else if (i < (Rand) && i > (Rand-20)) {
			$("#feedback").text("Red Hot");
			}
		else if (i < (Rand-20) && i > (Rand - 30)){
			$("#feedback").text("Warmer");
			}		
		else if (i < (Rand -30)){
			$("#feedback").text("Freezing... Brr...");
			}	
			
		$("#guessList").append('<li>' + i + '</li>');
		
			
	}
	
	function guessCount() {
		var startingCount = parseInt($("#count").text());
		var sumCount = startingCount + 1;
		$("#count").text(sumCount);
	}
	
	function newGame() {
		$("#guessList").children().remove();
		$("#count").text(0)
		$("#feedback").text("Make your Guess!");
	}
	
	$("#new").on('click', function() {
		newGame();
	});
	
	function validateButton() {
		if ($("userGuess").text() == "") {
			alert("yo")
		}
	}
	
	$("#guessButton").on('click', function(){
		if ((parseInt($("#userGuess").val())) === "") {
			alert("Please Enter a numerical value");
			return;
			}
		else {
			calculate();
			guessCount();
		}	
	});
	

});


