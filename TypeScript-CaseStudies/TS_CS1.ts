/* Your First TypeScript Program
let message: string = "Hello, World!";
console.log(message);
let message: string declares a variable that must always hold a text value.

console.log(message) prints the message to the screen.

Try changing the value of message and run it again!

6. Interactive Challenge / Mini-Project
Your Turn!

Change the message variable to your own name and print a personalized greeting.

Try declaring a variable for your age and print it with a message.

What happens if you try to assign a number to a variable declared as a string? */




let message: string = "Hello, World!";
console.log(message);

/* ---OUTPUT---
Hello, World!

----------------------------------------

~Change the message variable to your own name and print a personalized greeting */

message = "Hello, Mohana!";
console.log(message);

/* ---OUTPUT---
Hello, Mohana!

---EXPLANATION---
Because "Hello, Mohana!" is also string(text). It can be stored in a variable of type string

----------------------------------------

~Try declaring a variable for your age and print it with a message. */

let age: number = 19;
console.log(`My age is ${age}`);

/* ---OUTPUT---
My age is 19

---EXPLANATION---
19 is numeric value and it should be stored in a variable of type number


----------------------------------------

~What happens if you try to assign a number to a variable declared as a string?  */

let text: string = 90;
console.log(text);


//----------COMPILING--------- tsc file_name.ts

/* ---OUTPUT---
When we compile the .ts file, it will show error
- error TS2322: Type 'number' is not assignable to type 'string'

---EXPLANATION---
we created a variable called text of type string. 
19 is number, numeric values should be stored in number type, they cannot be stored in string type variables like text.

------------RUNNING-------------- node file_name.js

---OUTPUT---
90

---EXPLANATION---
After compilatinon, the .ts file will be converted into .js file and this .js file is executed to get output
If we ingore the error which we got while compiling the .ts file and executed the generated .js file, it will run and produce output without error
In JavaScript there are no data types, we need not to specify them.
We can store any value in any variable */
