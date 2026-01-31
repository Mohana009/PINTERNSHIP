// 6. Interactive Challenge
// Your Turn!

// Declare a variable called city and assign it your favorite city as a string.

// Declare a variable called temperature with type number and assign it a value.

// Create a variable called isRaining and let TypeScript infer its type from the value you assign.

// Write a function called weatherReport that takes city, temperature, and isRaining as parameters and prints a message like:
// "In <city>, it is <temperature>°C. Is it raining? <true/false>"

// Try calling the function with your variables.



// ~Declare a variable called city and assign it your favorite city as a string.
var city: string = "NewYork";

// ~Declare a variable called temperature with type number and assign it a value.
var temperature: number = 27;

// ~Create a variable called isRaining and let TypeScript infer its type from the value you assign.
var isRaining = true;

/* ~Write a function called weatherReport that takes city, temperature, and isRaining as parameters and prints a message like:
 "In <city>, it is <temperature>°C. Is it raining? <true/false>" */
function weatherReport(city: string, temperature: number, isRaining: boolean){
    console.log(`In ${city}, it is ${temperature}°C. Is it raining? ${isRaining}`);
}

// ~Try calling the function with your variables.
weatherReport(city, temperature, isRaining);

/* ---OUTPUT---
In NewYork, it is 27°C. Is it raining? true    */
