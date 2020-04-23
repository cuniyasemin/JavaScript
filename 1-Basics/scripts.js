/*****************************
 * Variables and Data Types
 */



/*
Variables are a fundamental concept of every programming language in the world.
We can say that a variable is like a container in which we can store a value in order to use it over and over again in our code
*/
/*
var firstName = 'Yasemin';

var lastName = 'Cüni';

var age = 24 ;
*/
/*
    Primitive Types
    In javascript, there are 5 different data type:
    1. Number : Floating, decimals, integers
    2. String : used for text
    3. Boolean: Logical data type that can only true or false
    4. Undefined: Data type of variable that does not have a value yet
    5: Null: Also means 'non-existent'
*/
/*
var fullAge = true;

var job;

job = 'Engineer'

*/

// There are two type of comments

// Single Line Comments

/*(asterisk)
Multi Line Commentd
*/





/****************************************
 * Variable mutation and type coercion
 */
/*
 var firstName = 'Yasemin Cüni';
 var age = 24;

 // Type coercion
 console.log(firstName+ ' ' + age);

 var job, isMarried;
 job='Engineer';
 isMarried = false;


 //Variable mutation
 age = 'twenty four';
 job = 'teacher';
*/





/**********************************************
 * Basic Operators
 */

/*
var year, yearYasemin, yearCuni;

now = 2020;
ageYasemin = 25;
ageCuni = 60;


// Math operators
yearYasemin = now - ageYasemin;
yearCuni = now - ageCuni;

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


//Logical operator
var yaseminOlder = ageYasemin > ageCuni;

//typeof operator

console.log(typeof yaseminOlder); //boolean
console.log(typeof ageYasemin); //number
console.log(typeof 'Cuni is older than Yasemin'); // string
var x;
console.log(typeof x); //undefined
*/




/*************************************************
 * Operator precidence
 */

//Look at this site
//http://www-lia.deis.unibo.it/materiale/JS/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence.html





/*************************************************
 * Cooding Challenge 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

*/

/*
var massMark, heightMark, massJohn, heightJohn;

massMark = 78 ;
heightMark = 1.70;

massJohn = 52;
heightJohn = 1.61;


var markBIM = massMark / (heightMark * heightMark);
var johnBIM = massJohn / (heightJohn * heightJohn);

console.log("Is Mark's BIM higher than John's?" + (markBIM > johnBIM));
*/






/***************************************************
 * If / else statements
 */


/*
Javascript, as well as most other programming languages out there, has a couble of structures which are features that allow us to execute only cetain parts of our code, or to execute parts multiple times.
*/





/******************************************************
 * Boolean Logic
 */

/*
var firstName = 'Yasemin';
var age = 25;


if (age < 13) {
    console.log(firstName + ' is a girls.');
}
else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
}
else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young.');
}
else {
    console.log(firstName + ' is a woman.')
}
*/











/********************************************************
 * The Ternary Operator and Switch Statements
 */

// var firstName = 'John';
// var age = 24;


// //Ternary Operator
// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');


// var drink = age >= 18 ? 'beer' : 'juice';


// //Switch Statements

// var job = 'teacher';

// switch (job) {
//     case 'teacher':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon');
//         break;
//     default:
//         console.log(firstName + ' does something else.')
//         break;
// }





/******************************************************************
 * Truthy and falsy values and equality operators  
 */

/*
 in Javascript, a falsy values is a value that is considered false when evaluated in an if/else statement condition. 
 And the values that are falsy in Javascript.
 */

// falsy values: undefined, null, 0, '', NaN
// Truthy values:  NOT falsy values.

/*
  They are not exactly false, but they will turn out to be false when evaluated in a if/else condition. 
*/