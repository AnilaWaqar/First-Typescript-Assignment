// List of animals with a common characteristic
var animals = ["dog", "goat", "cow"];
// Use a for loop to print the name of each animal
console.log("Names of animals:");
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
//Use a for loop to print a statement about each animal
console.log("\nStatements about each animal:");
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i], " would make a great pet."));
}
//  common characteristic
console.log("\nAny of these animals would make a great pet!");
//  common characteristic
console.log("They are all mammals.");
