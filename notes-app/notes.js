const { default: chalk } = require('chalk')
const fs = require('fs')

/*const getNotes = () => {
    return 'Your notes...'
}*/

const addNote = (title, body)     =>  {
    const notes = loadNote()
   /* const duplicates = notes.filter(function(note) {
        return note.title === title
    })
*/
//const duplicates = notes.filter( note => note.title === title)
const duplicate = notes.find( note => note.title ==title)
   // if(duplicates.length ===0) {

   debugger
   
       if(!duplicate)    {
    notes.push({
        title: title,
        body : body
    })
    console.log(notes)
    saveNotes(notes)
}
else {
    console.log('note title taken')
}  
}


const loadNote = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer);
    }
    catch(e)    {
        return []
    }
    
}

const saveNotes = (notes) =>  {
    const jsonData = JSON.stringify(notes)
    fs.writeFileSync('notes.json',jsonData)
}

//module.exports = getNotes 

const removeNote = (title) =>{
    const notes = loadNote()
    /*const updateNotes = notes.filter(function(note)   {
        return note.title!==title
    })*/
    const updateNotes = notes.filter(note => note.title!==title)
    if(updateNotes.length !== notes.length) {
        console.log(chalk.inverse.green('Note removed'))
        console.log(updateNotes)
        saveNotes(updateNotes)
    }
    else {
        console.log(chalk.inverse.red('No note found'))
    } 
}

const listNode = () => {
    const noteList = loadNote()
    noteList.forEach(note => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNote()
    const noteExist = notes.find( note => note.title==title)
    if(noteExist === undefined) {
        console.log(chalk.red('No note found'))
    }
    else {
        console.log(chalk.blue.bold(noteExist.title) + '\n' + noteExist.body)
    }
}

module.exports = {
   // getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNode : listNode,
    readNote : readNote
}