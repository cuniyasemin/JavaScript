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