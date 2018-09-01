var displayAnswerArray = ["Zero" ,"One" , "Two" , "Three" , "Four" , "Five" , "Six" , "Seven" , "Eight" , "Nine" , "Ten",
							"Eleven" , "Twelve" , "Thirteen" , "Fourteen","Fifteen", "Sixteen" , "Seventeen" , "Eighteen", "Nineteen" , "Twenty"];
var eventKey;
function init (){
	userInputValue()
	
	}

function userInputValue (){
	$("#userValue").keydown(function(e){
		  eventKey = e.which || e.keyCode;
		 if ( (eventKey < 48 || eventKey > 57) && (eventKey < 96 || eventKey > 105) && (eventKey < 8 || eventKey > 9)) {
        		e.preventDefault();
        		return false;
   			 }
		});
		enbleBtn (eventKey)
		
}

function enbleBtn (user){
	$("#btn").css("cursor" , "pointer");
	
	$("#btn").on('click', function(){
		var val = $("#userValue").val()
		//alert (val)
		displayAnswerArray.forEach(function(value, index, array) {
    		
					if (val < 21){
						if (val == index){
							$("#answerDisplay").html(value).removeClass("answerDisplay1");
						}
						
						}else{
							$("#answerDisplay").html("<small>Less Then Twenty Only</small>").addClass("answerDisplay1");
							}
				
			});
		});
	
	}