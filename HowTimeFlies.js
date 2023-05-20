/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const BEGIN = new Date(readline().replaceAll(".", "-").split("-").reverse().join("-"))
const END = new Date(readline().replaceAll(".", "-").split("-").reverse().join("-"))

const diff = new Date(END.getTime() - BEGIN.getTime());

const diffYear = diff.getUTCFullYear() - 1970;
const diffMonth = diff.getUTCMonth();
const diffDays = Math.ceil((END.getTime() - BEGIN.getTime()) / (1000 * 3600 * 24))

let result = []

if(diffYear != 0) result.push(diffYear > 1 ? (diffYear + " years") : diffYear + " year");
if (diffMonth != 0) result.push(diffMonth > 1 ? (diffMonth + " months") : (diffMonth + " month"));
result.push("total " + diffDays + " days");

console.log(result.join(", "))
// Write an answer using console.log()
// To debug: console.error('Debug messages...');
