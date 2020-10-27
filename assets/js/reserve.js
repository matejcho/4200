var inputName = document.getElementById("firstName").innerText;
var inputSurname = document.getElementById("surname").innerText;
var inputEmail = document.getElementById("email").innerText;
var inputId = document.getElementById("id").innerText;
var inputNote = document.getElementById("note").innerText;

let myObj = {
    name: inputName,
    surname : inputSurname,
    email: inputEmail,
    id: inputId,
    note: inputNote
}

let myObj_serialized = JSON.stringify(myObj);
localStorage.setItem("myObj", myObj_serialized);
console.log(myObj_serialized);