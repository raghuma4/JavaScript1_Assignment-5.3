
// Creating StudentDetails object with required properties
var StudentDetails = {
	name: "Raghuma",
	DOB : "10/10/1995",
	skills: "HTML5, CSS and JavaScript",

	Address: {
		city: "Hyderabad",
		state: "Telangana",		
		country: "India",
		pincode: "500032"
	}
}

 
console.log("Initial student details");
console.log(StudentDetails); 

// add new properties to StudentDetails
StudentDetails.eyeColor = "blue";
StudentDetails.motherName = "Padma";

console.log("-----------------------------------------------------");

// print the StudentDetails after adding new properties
console.log("Student details after adding eyeColor and motherName");
console.log( StudentDetails); 

console.log("-----------------------------------------------------");


// delete skills property by using delete()
delete(StudentDetails["skills"]);

console.log("Student details after deleting skills property");
// print StudentDetails after deletion
console.log( StudentDetails); 
 