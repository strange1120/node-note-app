const chalk = require('chalk')
const chalkAnimation = require('chalk-animation');
const getNotes = require("./notes.js");

const text = getNotes();
console.log(text);

console.log(chalk.bgGreen('Success!'))
const rainbow = chalkAnimation.rainbow('Lorem ipsum'); // Animation starts

setTimeout(() => {
    rainbow.stop(); // Animation stops
}, 1000);

setTimeout(() => {
    rainbow.start(); // Animation resumes
}, 2000);