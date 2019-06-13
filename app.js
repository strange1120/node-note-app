const chalk = require("chalk");
const chalkAnimation = require("chalk-animation");
const getNotes = require("./notes.js");
const yargs = require("yargs");

yargs.version("1.1.0");

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: () => {
    console.log('Adding a new note')
  }
})

yargs.command({
  command: 'remove',
  describe: 'Removing a note',
  handler: () => {
    console.log('Removing a note')
  }
})

yargs.command({
  command: 'list',
  describe: 'Listing out all the notes',
  handler: () => {
    console.log('Listing all the notes')
  }
})

yargs.command({
  command: 'read',
  describe: 'Reading a note', 
  handler: () => {
    console.log('Reading a note')
  }
})


console.log(yargs.argv);
