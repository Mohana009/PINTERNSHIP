/*                  CASE STUDY 4
                    let & const

6. Interactive Challenge
Your Turn!

Declare a variable score with let and assign it a number.

Inside a block (e.g., an if statement), declare another score variable with a different value and print it.

Declare a constant COUNTRY and assign it your favorite country.

Try to change the value of COUNTRY and observe what happens.

Try to re-declare score in the same block and see the result.

 
~Declare a variable score with let and assign it a number. */
let score: number = 99;


/* 
~Inside a block (e.g., an if statement), declare another score variable with a different value and print it. */
if(true){
    let score: number = 10;
    console.log(`Score inside if-block: ${score}`); //10;
}
/* ----OUTPUT-----
Score inside if-block: 10


~Declare a constant COUNTRY and assign it your favorite country. */
const COUNTRY: string = "India";

/*
~Try to change the value of COUNTRY and observe what happens. */

// COUNTRY = "China";   //error

/* -----ERROR----
Cannot assign to 'COUNTRY' because it is a constant
We cannot perform redeclaration or reaasignment on const variables


~Try to re-declare score in the same block and see the result. */

// let score: number;  //error

/* ------ERROR-----
Cannot redeclare block-scoped variable 'score'.
We cannot re declare let variables within the same scope. */

