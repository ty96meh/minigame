const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var currentName = urlParams.get("Username");
console.log(currentName);

const FrontPage = document.querySelector(".FrontPage");

function Name(){
    FrontPage.querySelector(".Username").innerHTML = currentName;
    }

window.onload = function(){
    Name();
}


function start(){
    location.href = 'QuizQuestion.html?Username='+ currentName;
}
