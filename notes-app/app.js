//const getNotes = require('./notes')
/*const fs = require('fs')

//fs.writeFileSync('notes.txt','My name is Ruchita')

fs.appendFileSync('notes.txt',"\nNew message appended");

*/

//const name = require('./utils')

//const name = 'Ruchita'

/*const add = require('./utils.js')
const sum = add(4,-2)
console.log(sum)*/


//const note = require('./notes.js')
/*require('./notes.js')
const msg = getNotes()

console.log(msg)*/

/*const validator = require('validator')

console.log(validator.isEmail('example.com'))

console.log(validator.isURL('https/mead.io'))
*/


const chalk = require('chalk')
const { argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes')
//const getNotes = require('./notes')
//const nodes = require('./notes')

/*console.log(chalk.green('Success'))
console.log(chalk.bold.blue('Text'))
console.log(chalk.inverse.red('Inverse'))
*/

//console.log(process.argv)
//yargs.version('1.1.0')

/*
const arg = process.argv[2]

if(arg=='add')
    console.log('Note added')
else if(arg=='remove')
    console.log('Note removed')
*/

yargs.command({
    command: 'add',
    describe : 'Add a new note',
    builder : {
        title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
        },
        body :   {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)    {
       // console.log('Adding a new note',argv)
      // console.log('Title: '+argv.title)
      // console.log('Body: '+argv.body)
      notes.addNote(argv.title, argv.body)
    }
}) 



yargs.command({
    command: 'remove',
    describe : 'Removing a new note',
    builder : {
        title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
        }
    },
    handler()   {
        //console.log('Removing a new note')
        console.log("removing note with title"+argv.title)
        notes.removeNote(argv.title)
    }
}) 

yargs.command(
    {
        command: 'list',
        describe: 'Listing out all notes',
        handler()  {
            console.log(chalk.blue.bold('Your notes:'))
            notes.listNode()
    }
}
)

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption: true,
            type : 'string'
        }
    },
    handler()   {
        notes.readNote(argv.title)
    }
})

//console.log(yargs.argv)
yargs.parse()