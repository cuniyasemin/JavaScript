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

// var height = 23;

// if (height) {
//     console.log('Variable is defined.');

// } else {
//     console.log('Variable has NOT been defined.')
// }

// //Equality operators 
// if (height == '23') {
//     console.log('The == operator does type coercion!');
// }





/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// var scoreJohn = (89 + 120 + 103) / 3;
// var scoreMike = (116 + 94 + 123) / 3;
// var scoreMarry = (97 + 134 + 105) / 3;

// console.log(scoreJohn, scoreMike, scoreMarry);

// var minnig = scoreJohn;
// var name = "John";

// if (scoreMike > minnig) {
//     minnig = scoreMike;
//     name = "Mike"
// }
// if (scoreMarry > minnig) {
//     minnig = scoreMarry;
//     name = "Marry"
// }

// console.log(name + '\'s team wins with ' + minnig + ' points.');







/**************************************************************************
 * Functions
 */

/**
 If we have a piece of code that we want to run a lot of times, we can put that into a function instead of writing it over and over again.
 So functions are like containers that hold same lines of code and we can pass arguments into them and they can then returns us our result.
 */

// function calculateAge(birthYear) {
//     return 2020 - birthYear;
// }


// var ageJohn = calculateAge(1995);
// var ageMike = calculateAge(1990);
// var ageJarry = calculateAge(1950);


// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired.');
//     }
// }


// yearsUntilRetirement(1995, 'John');
// yearsUntilRetirement(1990, 'Mike');
// yearsUntilRetirement(1950, 'Jarry');






/***********************************************************************************
 * Function Statements and Experessions
 */


// function declaration 
// function whatDoYouDo (firstName, job)


// function expression

var whatDoYouDo = function(firstName, job) {
    return 25;
}

console.log(whatDoYouDo('Yasemin', 'Computer Engineer'));