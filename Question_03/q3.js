// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "malik";
// lower case
console.log(personName.toLowerCase());
// Upper case
console.log(personName.toUpperCase());
// title case
console.log(personName.charAt(0).toUpperCase() + personName.slice(1, 5));
