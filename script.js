let signUpBtn =document.getElementById("signUpBtn");
let signInBtn =document.getElementById("signInBtn");
let nameField =document.getElementById("nameField");
let title = document.getElementById("title");



signInBtn.onclick = function(){
    
    nameField.style.maxHeight="0";
    title.innerHTML="sign In";
    signInBtn.classList.add("disable");
    signInBtn.classList.remove("disable");
}
signUpBtn.onclick = function(){
    
    nameField.style.maxHeight="0";
    title.innerHTML="sign Up";
    signUpBtn.classList.remove("disable");
    signUpBtn.classList.add("disable");
}
