var obj1 = {
	name_first: "Tyson",
	name_last: "Hood",
	email: "Tyson@TysonHood.com",
	message: "Hi, I'm Tyson."
}

var obj2 = {
	name_first: "Sam",
	name_last: "Smith",
	email: "Sam@TysonHood.com",
	message: "Hi, I'm Sam."
}

console.log(obj1);

var arr1 = [ "Tyson" , "Hood" , "Tyson@TysonHood.com" , "Hi, I'm Tyson." ]
console.log(arr1);
console.log(arr1[2]);

var arr1 = [ obj1.name_first , obj1.name_last , obj1.email , obj1.message ]
console.log(arr1);
console.log(arr1[2]);

var arr1 = [ obj2.name_first , obj2.name_last , obj2.email , obj2.message ]
console.log(arr1);
console.log(arr1[2]);


var arr1 = [ obj1 , obj2 ]
console.log(arr1);
console.log(arr1[1]);
console.log(arr1[1].name_last);
