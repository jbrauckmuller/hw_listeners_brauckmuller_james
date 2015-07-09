var fName = document.getElementsByName("fname")[0];
var lName = document.getElementsByName("lname")[0];
var eMail = document.getElementsByName("email")[0];
var textMessage = document.getElementsByName("message")[0];

document.getElementById("info").addEventListener("submit", function(event) {
	event.preventDefault();
	console.log("The first name is:" + fName.value);
	console.log("The last name is:" + lName.value);
	console.log("The email is:" + eMail.value);
	console.log("The message is:" + textMessage.value);
});
