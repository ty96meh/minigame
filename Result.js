const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var currentName = urlParams.get("Username");
var end_time = urlParams.get("total-time");
var totalQuestion = urlParams.get("total-question");
var attempt = urlParams.get("attempt");
var correctAnswer = urlParams.get("correctanswer");
var wrongAnswer = urlParams.get("wronganswer");
var finishTime = new Date();


const resultPage = document.querySelector(".Result");

function Result(){
    resultPage.querySelector(".username").innerHTML = currentName;
    resultPage.querySelector(".total-time").innerHTML = Math.floor((end_time/1000/60) << 0) +' mins ' + Math.floor((end_time/1000) % 60) + ' sec';
    resultPage.querySelector(".total-question").innerHTML = totalQuestion;
    resultPage.querySelector(".attempt").innerHTML = attempt; 
    resultPage.querySelector(".total-correct").innerHTML = correctAnswer;
    resultPage.querySelector(".total-wrong").innerHTML = wrongAnswer;
    const percentage = (correctAnswer/totalQuestion)*100;
    resultPage.querySelector(".total-percentage").innerHTML = percentage.toFixed() + "%";
    
}


window.onload = function(){
    Result();
}
