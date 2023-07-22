
function submit(){
    var currentName = document.getElementById("Username").value;
    console.log(currentName);
    location.href = 'ConfirmName.html?Username='+ currentName;
}
