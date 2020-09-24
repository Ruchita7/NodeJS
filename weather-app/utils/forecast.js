const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url ='http://api.weatherstack.com/current?access_key=a083fb3fe09f0d7974e41a7814c73870&query='+latitude+','+longitude
   // console.log(url)
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('unable to connect to weather service',undefined)
        }
        else if(body.error)    {
            callback('unable to find location',undefined)
        }
        else {
            const currentData = body.current
            callback(undefined, 'It is currently ' + currentData.temperature + 
            ' degrees out. It feels like ' + currentData.feelslike + ' degrees out')
        }
    })

}

module.exports = forecast