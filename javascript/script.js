
var headerText = "Edgar Allan Poetry";
var poem = new Array("I", "was", "never", "insane", "except", "upon",
 "occasions", "when", "my", "heart", "was", "touched", "-Edgar Allan Poe");
var wordCounter = -1;
var numberOfPictures = 13;
var myVar;

function setPicture(){

	var rndNum = Math.floor(Math.random()*numberOfPictures);
	var picName = "images/p" + rndNum + ".jpg"

	$('.pictureContainer').css("background-image", ("url(" + picName +")") );

	if(wordCounter >= 0){
		if(wordCounter == 12){
			$('.pictureContainer').css("font-size", "40px" );
		} else {
			$('.pictureContainer').css("font-size", "120px" );
		}
		$('.pictureContainer').html(poem[wordCounter]);
	} else {
		$('.pictureContainer').html("");
	}
	wordCounter += 1;
	if(wordCounter >= numberOfPictures){
		wordCounter = -1;
	
	}


}





$(document).ready(function(){
	$('h1').html(headerText);

	$('.pictureContainer').css({
   
     backgroundPosition : 'center top',
     backgroundRepeat   : 'no-repeat',
     backgroundSize     : 'contain' 
     
	});  

	myVar = setInterval(setPicture, 1500);


});