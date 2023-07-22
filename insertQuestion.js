const questionNo = document.querySelector(".questionNo");
const questionText = document.querySelector(".questionText");
const choiceOption = document.querySelector(".choiceOption");
const answerIndicatorPresent = document.querySelector(".answer");
const homePage = document.querySelector(".home-page");
const quizPage = document.querySelector(".quiz");
const resultPage = document.querySelector(".Result");
const time = document.querySelector(".total-time");
const username = document.querySelector(".username");
const sumQuestion = document.querySelector(".total-question");
const sumAttempt = document.querySelector(".attempt");


let questionCounter = 0;
let currentQuestion; 
let availableQuestions = [];
let availableOptions = [];
let correctAnswer = 0;
let wrongAnswer = 0;
let attempt = 0;
let start_time = [];
let end_time = [];


function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        availableQuestions.push(quiz[i]);
    }
}  
function getNewQuestion(){
    questionNo.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;

    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.question;

    const index1 = availableQuestions.indexOf(questionIndex);

    availableQuestions.splice(index1,1);

    const optionLen = currentQuestion.option.length;

    for(let i=0; i<optionLen; i++){
        availableOptions.push(i);
    }

    choiceOption.innerHTML = '';
    let animationDelay = 0.2; 

    for(let i=0; i<optionLen; i++){
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];

        const index2 = availableOptions.indexOf(optionIndex);
        availableOptions.splice(index2,1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.option[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.2;
        option.className = "option";
        choiceOption.appendChild(option);
        option.setAttribute("onclick","getResult(this)");
    }

    questionCounter++
}

function getResult(element){
    const id = parseInt(element.id);
    if(id === currentQuestion.answer){
        element.classList.add("correct");
        updateAnswerIndicator("correct");
        correctAnswer++;
        console.log("correct: " +correctAnswer)
    }
    else{
        element.classList.add("wrong");
        updateAnswerIndicator("wrong");
        wrongAnswer++;
        const optionLen = choiceOption.children.length;
        for(let i=0; i<optionLen; i++){
            if(parseInt(choiceOption.children[i].id) === currentQuestion.answer){
                choiceOption.children[i].classList.add("correct")    
            }
        }
    }
    attempt++;
    unclickableOptions();
}

function unclickableOptions(){
    const optionLen = choiceOption.children.length;
    for(let i=0 ; i<optionLen; i++){
        choiceOption.children[i].classList.add("already-answered");
    }
    
}

function answerIndicator(){
    answerIndicatorPresent.innerHTML = '';
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        const indicator = document.createElement("div");
        answerIndicatorPresent.appendChild(indicator);
    }
}

function updateAnswerIndicator(markType){
    answerIndicatorPresent.children[questionCounter-1].classList.add(markType);
}

function next(){
    if(questionCounter === quiz.length){
        quizOver(); 
    }
    else{
        getNewQuestion();
    }
}

function quizOver(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var currentName = urlParams.get("Username");
    end_time = new Date();
    var dif = end_time - start_time;
    console.log(dif);
    location.href = 'result.html?Username='+ currentName + '&total-question='+ quiz.length + '&attempt=' + attempt + '&correctanswer=' + correctAnswer + '&wronganswer=' + wrongAnswer + '&total-time=' + dif;

}

window.onload = function(){
    setAvailableQuestions();
    getNewQuestion();
    answerIndicator();
    start_time = new Date();

}




