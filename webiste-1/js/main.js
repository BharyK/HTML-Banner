$(document).ready(function (){
   $(".tryIt").on ('click' , function (){
	  
	  $("body").addClass("wrong").css ("cursor" , "pointer");
	  setTimeout (function(){
		  $("body").removeClass("wrong");
	  },300);
	   cameraCapture ();
	})
	
	$(".btn").on ("click" , function (){
			alert ("Hire me I will give you complete source code and include SVG image");
		});
});

function cameraCapture(){		
	var oggaud = 'audio/camera.ogg';
	var mp3aud = 'audio/camera.mp3';
	$('#audio').attr('src',oggaud);
	$('#audio').attr('src',mp3aud);	
	var aud = document.getElementById("audio"); 	
	aud.play();
}