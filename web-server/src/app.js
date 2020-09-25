const { request } = require('express')
const express = require('express')
const path = require('path')
const hbs = require('hbs')

console.log(__dirname)
//console.log(__filename)
const directoryPath = path.join(__dirname,'../public')

const app = express()
//Paths for express config : default folder name for hbs files is views, when renaming folder to templates
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,"../templates/partials")

app.use(express.static(directoryPath))

//set up handle bars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)


app.get('',(req,res) => {
    res.render('index', {
        title : 'Weather',
        name: 'Ruchita'
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        title : 'About me',
        name: 'Ruchita'
    })
})

app.get('/help', (req,res) =>{
    res.render('help', {
    helpText : 'This is some helpful text',
    title: 'Help',
    name : 'Ruchita'
    })
})

/*app.get('/weather',(req,res) => {
    res.send({
        "forecast" : "30 degrees",
        "location" : "Delhi"
    })
})*/



app.get('/help/*',(req,res) =>{
   // res.send('Help page is not found')
   res.render('error', {
       title : '404',
       errorMessage : 'Help article not found',
       name: 'Ruchita'
   })
})

app.get('*', (req,res) => {
   // res.send('My 404 page')
   res.render('error', {
    title : '404',
    name: 'Ruchita',
    errorMessage : 'Page not found'
   })
})
app.listen(3000, () => {
 console.log('server is up on port 3000')   
})