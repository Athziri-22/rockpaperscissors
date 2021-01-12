// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



let fun = Math.random();
  console.log(fun);

let userChoice="";
let computerChoice="";
let result="";
let randomNumber=0;
/*
$("shoot").click(function() {
  let message = $("#input").val ();
  
  userChoice = message;
$("userChoice").html(userChoice);
  if (randomNumber == 1) {
$(#computerChoice").html("Rock");
    } else if (randomNumber == 2) {
$(#computerChoice").html("Paper");
    }else {
$("computerChoice").html("Scissors");
       }
});
*/
randomNumber=Math.floor(Math.random()) * 3);


$("#shoot").click(function(){
    let message=$("#input").val();
    $("#userChoice").html(message);
});
$("#shoot").click(function(){
    let randomNumber=$("#input").val();
    $("#computerChoice").html(message);
});