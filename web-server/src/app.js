const { request } = require('express')
const express = require('express')
const path = require('path')

console.log(__dirname)
//console.log(__filename)
const directoryPath = path.join(__dirname,'../public')


const app = express()
app.use(express.static(directoryPath))

/*
app.get('', (req,res) => {
    res.send('<h1>Hello express!!</h1>')
})
*/
/*

app.get('/help', (req,res) => {
    res.send([{
        name : 'Ruchita',
        age: 19
    },
{
    name : 'Andrew',
    age: 30
}])
})

app.get('/about',(req,res) => {
    res.send('<h1>about page</h1>')
})*/

app.get('/weather',(req,res) => {
    res.send({
        "forecast" : "30 degrees",
        "location" : "Delhi"
    })
})
app.listen(3000, () => {
 console.log('server is up on port 3000')   
})