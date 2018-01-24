var objArr = [
	obj1 = {
		id: "123",
		name_first: "Tyson",
		name_last: "Hood",
		email: "Tyson@TysonHood.com",
		message: "Hi, I'm Tyson."
	}
,
	obj2 = {
		id: "456",
		name_first: "Sam",
		name_last: "Smith",
		email: "Sam@TysonHood.com",
		message: "Hi, I'm Sam."
	}
]

console.log(obj1);


var arr1 = [ obj1 , obj2 ]  //can make new array with vars declared in separate array?
console.log(arr1);
console.log(arr1[1]);
console.log(arr1[1].name_last);
console.log("==============1================");


console.log(objArr);
console.log("==============2================");
console.log(objArr[1]);
console.log("==============3================");

var arrNum = 0;

// This is for when the user inputs their info
var inputBtn = document.getElementById("inputButton");
inputBtn.addEventListener("click", function() {
	// FIRST!!! Check if ID is new
	// Generate random number for id
	// Get info from the inputs
	// Create obj with info
	// Push object into array
	// Display Friendly Message
})


//this is for when the user wants to retrieve their info
var outputBtn = document.getElementById("outputButton");
outputBtn.addEventListener("click", function() {
	// Get unique id from input
	var idNum = document.getElementById("idNumInput").value;

	// Loop through array to see if idNum matches another
	for (var i = 0; i < objArr.length; i++) {
		// If idNum matches, populate info to old form
		if (objArr[i].id == idNum) {
			console.log(objArr[i]);
		} if (objArr[i].id != idNum) {
			console.log("ID Not Recognized.");
		}
	}
})