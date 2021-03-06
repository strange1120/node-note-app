const chalk = require("chalk");
const chalkAnimation = require("chalk-animation");
const notes = require("./notes.js");
const yargs = require("yargs");

yargs.version("1.1.0");

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: 'string'
      }, 
      body: {
        describe: "Note body",
        demandOption: true,
        type: 'string'
      }
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Removing a note',
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.title)
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

yargs.parse()
