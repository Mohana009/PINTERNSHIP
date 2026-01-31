/*                  TS_CS6: Built in Types in Typescript

6. Interactive Challenge
Your Turn!

Create a function processTransaction that takes an amount (number), a description (string), and a flag isCredit (boolean).

If the amount is negative, the function should throw an error (never).

If the description is missing, use undefined and handle it in the function.

Print a summary of the transaction.
*/

function processTransaction(amount: number, description: string | undefined, isCredit: boolean): void{
    if(amount < 0){
        throw new Error("Error! Amount cannot be negative");
    }
    if(description == undefined){
        description = "NA";
    }
    console.log(`Amount: ${amount}\nDescription: ${description}\nIs Credit: ${isCredit}\n`);
}

console.log("Transaction 1 details:");
processTransaction(100, "Savings", true);

/* -----OUTPUT--------
Transaction 1 details:
Amount: 100
Description: Savings
Is Credit: true */

//We are giving undefined and handling it in the function
console.log("Transaction 2 details:");
processTransaction(1000, undefined, true);

/* -----OUTPUT--------
Transaction 2 details:
Amount: 1000
Description: NA
Is Credit: true */

//Sending -ve amount, it will throw an error
console.log("Transaction 3 details:");
processTransaction(-1001, "Rent", true);

/* -----OUTPUT--------
Transaction 3 details:
C:\Users\achut\OneDrive\Desktop\TypeScript\ts6.js:3
        throw new Error("Error! Amount cannot be negative");
        ^
*/
