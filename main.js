var objArr = [
	obj0 = {
		id: "123",
		name_first: "Tyson",
		name_last: "Hood",
		email: "Tyson@TysonHood.com",
		message: "Hi, I'm Tyson."
	}
,
	obj1 = {
		id: "456",
		name_first: "Sam",
		name_last: "Smith",
		email: "Sam@TysonHood.com",
		message: "Hi, I'm Sam."
	}
]

// Input info =====================================================
var inputBtn = document.getElementById("inputButton");
inputBtn.addEventListener("click", function() {

	// Get info from the inputs
	id = document.getElementById("uId").value;
	name_first = document.getElementById("firstNameInput").value;
	name_last = document.getElementById("lastNameInput").value;
	email = document.getElementById("emailInput").value;
	message = document.getElementById("messageInput").value;

	if(id != "") {

		// Update object with new info
		// Loop through array to see if id matches another
		for (var i = 0; i < objArr.length; i++) {

			// If id matches, populate info to old form
			if (objArr[i].id == id) {

				// populate info to old index
				objArr[i].id = document.getElementById("uId").value;
				objArr[i].name_first = document.getElementById("firstNameInput").value;
				objArr[i].name_last = document.getElementById("lastNameInput").value;
				objArr[i].email = document.getElementById("emailInput").value;
				objArr[i].message = document.getElementById("messageInput").value;
			}
		} 

		// Display Friendly Message
		alert("Thank you! Your info has been updated. :)")

	} else if(id == "") {// Check if ID is populated/new

		// Generate random number for id
		id = Math.floor((Math.random() * 899) + 100).toString();

		// Create obj with info
		objArr.push({ id, name_first, name_last, email, message });
		
		// Display Friendly Message
		alert("Thank you! Your ID is: " + id + ". :)")
	} 

	// Push object into array
	console.log(objArr)

	// }

	//Clear inputs
	document.getElementById("uId").value = "";
	document.getElementById("firstNameInput").value = "";
	document.getElementById("lastNameInput").value = "";
	document.getElementById("emailInput").value = "";
	document.getElementById("messageInput").value = "";
})

// Retrieve info ================================================
var outputBtn = document.getElementById("outputButton");
outputBtn.addEventListener("click", function() {

	// Get unique id from input
	var idNum = document.getElementById("idNumInput").value;

	// Loop through array to see if idNum matches another
	for (var i = 0; i < objArr.length; i++) {

		// If idNum matches, populate info to old form
		if (objArr[i].id == idNum) {
		document.getElementById("uId").value = objArr[i].id;
		document.getElementById("firstNameInput").value = objArr[i].name_first;
		document.getElementById("lastNameInput").value = objArr[i].name_last;
		document.getElementById("emailInput").value = objArr[i].email;
		document.getElementById("messageInput").value = objArr[i].message;
		} 
	}

	//Clear inputs
	document.getElementById("idNumInput").value = "";
})