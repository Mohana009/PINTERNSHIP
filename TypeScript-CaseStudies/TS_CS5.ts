/*                  TS-CS5: Any type in Typescript
6. Interactive Challenge
Your Turn!

Create a function recordAnswer that takes a question ID and an answer of any type, and stores it in an object.

Add at least three answers: a string, a number, and an array.

Print all recorded answers.
*/

/* Create a function recordAnswer that takes a question ID and an answer of any type, and stores it in an object.

Add at least three answers: a string, a number, and an array.

Print all recorded answers */

// I want this object which stores answers to be never changed, so making it as const
const submittedAnswers:{
    [questionId: number]: any;
} = {};


//A function to record answers of type *any* for a question
function recordAnswer(questionId: number, answer: any): void{
    submittedAnswers[questionId] = answer;
}

recordAnswer(1, "True");    //String
recordAnswer(2, 1001);      //Number
recordAnswer(3, [10, 20, 30, 40]);  //Array

console.log("Submitted answers:", submittedAnswers);

/* ------OUTPUT---------- 
Submitted answers: { '1': 'True', '2': 1001, '3': [ 10, 20, 30, 40 ] }

*any* type can be used when we don't know the type of data we get  */
