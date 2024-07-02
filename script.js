var score=0;

var question1=prompt("What is 2 + 2")
var answer1= "4"

if(question1 === answer1){
    score++
}

var question2=prompt("What is 4 + 4 ?")
var answer2="8"

if(question2 === answer2){
    score++
}

var question3=prompt("What is 5 + 5 ?")
var answer3="10"

if(question3 === answer3){
    score++
}


var question4=prompt("What is 2 * 4 ?")
var answer4="8"

if(question4 === answer4){
    score++
}


var question5=prompt("What is 1 + 1 ?")
var answer5="2"

if(question5 === answer5){
    score++
}
else{
    alert("loser 😢")
}





alert("your score is" + score)