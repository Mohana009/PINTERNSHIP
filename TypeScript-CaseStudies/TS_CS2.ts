/* Declare a variable:
    let productName:  string  =  "Bananas";
Write a function:
function printProduct(name: string): void {
  console.log("Product: " + name);
}
printProduct(productName);
Add a comment:

// This prints the product name
printProduct(productName);
Define a class:

class Store {
  open(): void {
    console.log("Store is open!");
  }
}
let store = new Store();
store.open();
6. Interactive Challenge
Your Turn!

Create a variable for your favorite fruit and print it.

Write a function that takes a number and prints double its value.

Add a single-line and a multi-line comment to your code.

Define a class called Person with a method sayHello that prints a greeting. 

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ~Create a variable for your favorite fruit and print it. */

let favFruit: string = "Custard Apple";
console.log(`My favourite fruit is ${favFruit}.`);

/* ---OUTPUT---
My favourite fruit is Custard Apple.

----------------------------------------

~Write a function that takes a number and prints double its value. */

function printNumber(num: number): void{
    console.log(`Double of ${num} is`, 2 * num);
}

//Calling the function to print double of a number
printNumber(2);

/* ---OUTPUT---
Double of 2 is 4

---------------------------------------- 

~Add a single-line and a multi-line comment to your code. */


// This is single-line comment

/* This is a multi-line comment 
Comments are ignored by the TypeScript compiler
They are used to understand tricky code */


/* ---------------------------------------- 

~Define a class called Person with a method sayHello that prints a greeting. */

class Person{
    sayHello(): void{
        console.log("Hello, how are you?");
    }
}

let p1 = new Person();
p1.sayHello();

/* ---OUTPUT---
Hello, how are you?
*/

