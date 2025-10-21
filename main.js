alert('Hello Jannatul');
console.log('Chikini Chameli')
console.error('This is an error')
console.warning('this is a warning')

//var let, const, to create variables
let age = 50;
const name = "Mileena";
const isCool = true;
const rating = 4.5; 
const numbers = new Array(1,3, 4, 5);
const fruits = ["apples", "oranges", "watermelons"];
const person = {
    firstName: 'Kate',
    lastName: "Mack",
    age: 30,
    hobbies: ["painting", "writing"]
};
const todos = {
    {
        id: 1,
        text: "Take out the trash",
        isCompleted: true   
    },
    {
        id: 2,
        text: "Do Dishes",
        isCompleted: true
    }
   
}
var myStr = "I am a \"adouble quoted\" string";
var thisStr = 'Hello "this is a quote"';
console.log(age); 
console.log(numbers);
/******
 CODE OUTPUT
 \' single quote
 \"double quote
 \\ backslash
\n new line
\r carriage retrun
\t tab
\b bakcspace
\f form feed
 * *****/

var FirstName = "Maya";
var LastLetterOffOfFirstName = FirstName[FirstName.length - 1];
function wordBlanks(myNoun, myAdjective, myVerb) {
    var result ="";
    result += "The ", myAdjective, myNoun, myVerb + "To the store " + myAdventure;
    return result;
} 
console.log(wordBlanks("dog", "big", "ran"));
var myArray = [[1,2,3], [4,5,6], [7,8,9] [[10, 11, 12], 13, 14, 15]];
var myData = myArray[2][1];
console.log(myData);
myArray.push([72, 73]);

var myGlobal = 10;
function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "less than 5";
    } else {
        return "Greater than or equal to 10";
    }
}
 console.log(orderMyLogic(3))

 var names = ["Hole-in-one", "Eagle", "Birdie", "Par"];
 function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes <= par - 1) {
        return names[2];
    }
}