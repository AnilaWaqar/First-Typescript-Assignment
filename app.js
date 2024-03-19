// Function to store information about a car
function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Create an object to store car information
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    // Process additional keyword arguments
    for (var i = 0; i < options.length; i += 2) {
        var key = options[i];
        var value = options[i + 1];
        car[key] = value;
    }
    return car;
}
// Call the function with required and optional information
var myCar = createCar("Honda", "Civic", "color", "Red Wine", "year", 2023, "optionalFeature", "fully loaded,4X4");
// Print the returned object to verify the information
console.log("Car Information:");
console.log(myCar);
