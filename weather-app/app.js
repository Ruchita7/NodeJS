//const request = require('request')
 //const data = JSON.parse(response.body)
    //console.log(response.body.current)
//const url ='http://api.weatherstack.com/current?access_key=a083fb3fe09f0d7974e41a7814c73870&query='

// const url ='http://api.weatherstack.com/current?access_key=a083fb3fe09f0d7974e41a7814c73870&query=37.8267,-122.4233&units=f'
// request({url: url, json: true}, (error, response)  => {
   
//     if(error)  { 
//         console.log('unable to connect to weather service')
//     }
//     else if(response.body.error)  {
//         console.log('unable to find location')
//         console.log(response.body.error.info)
//     }
//     else {
//     const currentData = response.body.current
//     console.log(currentData.weather_descriptions[0])
//     console.log('It is currently ' + currentData.temperature + 
//     ' degrees out. It feels like ' + currentData.feelslike + ' degrees out')
//     }
// })

//const geocodeurl='https://api.mapbox.com/geocoding/v5/mapbox.places/los%20angeles.json?access_token=pk.eyJ1IjoicnVjaGl0YTExMCIsImEiOiJja2ZiMG5lcDcwdGdsMnVvNTE3ZG5qM2NtIn0.RptbxXX70DtvCwCxZOix0Q'

// const geocodeurl='https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoicnVjaGl0YTExMCIsImEiOiJja2ZiMG5lcDcwdGdsMnVvNTE3ZG5qM2NtIn0.RptbxXX70DtvCwCxZOix0Q'

// request({url : geocodeurl, json: true} , (error, response) => {
//     if(error) {
//         console.log('unable to connect to location serv')
//     }
//     else if(response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search')

//     }
//     else {
//     const data = response.body.features[0]
//     const latitude = response.body.features[0].center[0] 
//     const longitude = response.body.features[0].center[0] 
//     console.log(latitude, longitude)
//     }
// })



const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(address.length !==0) {
geocode(address, (error, {longitude, latitude, location}) => {
   // console.log(data)
    //console.log(error)
  

    forecast(longitude, latitude , (error, forecastData) => {
        if(error) {
            return console.log('Error', error)
        }
        console.log(location)
       console.log('Data', forecastData)
        })
    }
)
}

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// forecast( 44.1545, -75.7088,(error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })