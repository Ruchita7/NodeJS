/*const book = {
    title : 'Ego is the enemy',
    author : 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)
*/
//const parsedData =JSON.parse(bookJSON)
//console.log(parsedData.title)

const fs = require('fs')
//fs.writeFileSync('1-json.json',bookJSON)

/*const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer.toString())

const data = JSON.parse(dataBuffer)
console.log(data.title)

*/

const dataBuffer = fs.readFileSync('1-json.json')
const jsonData = JSON.parse(dataBuffer)
console.log(jsonData)

jsonData.name='Ruchita'
jsonData.age=35

const jsonText = JSON.stringify(jsonData)
console.log(jsonText)

fs.writeFileSync('1-json.json',jsonText)